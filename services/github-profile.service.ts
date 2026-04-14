import {
  fetchGitHubRepositories,
  fetchGitHubUser,
  type GitHubRepoRecord,
  type GitHubUserRecord,
} from "@/repositories/github.repository"

const FALLBACK_BIO =
  "Full-stack developer building polished web products, production APIs, and AI-assisted workflows."

function safeUrl(value: string | null) {
  if (!value) {
    return null
  }

  const trimmed = value.trim()

  return trimmed.length > 0 ? trimmed : null
}

export interface NormalizedLanguage {
  label: string
  count: number
}

export interface NormalizedGitHubProject {
  name: string
  description: string
  language: string | null
  stars: number
  url: string
  homepage: string | null
  topics: string[]
  updatedAt: string
}

export interface NormalizedGitHubProfile {
  login: string
  name: string
  bio: string
  location: string
  blog: string | null
  githubUrl: string
  repoCount: number
  followers: number
  following: number
}

export interface GitHubPortfolioSnapshot {
  profile: NormalizedGitHubProfile
  languages: NormalizedLanguage[]
  featuredRepositories: NormalizedGitHubProject[]
  socialLinks: string[]
}

export function normalizeGitHubPortfolioSnapshot(
  user: GitHubUserRecord,
  repositories: GitHubRepoRecord[]
): GitHubPortfolioSnapshot {
  const languages = repositories.reduce<Record<string, number>>((accumulator, repo) => {
    if (repo.language) {
      accumulator[repo.language] = (accumulator[repo.language] ?? 0) + 1
    }

    return accumulator
  }, {})

  const sortedLanguages = Object.entries(languages)
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1]
      }

      return left[0].localeCompare(right[0])
    })
    .map(([label, count]) => ({ label, count }))

  const featuredRepositories = [...repositories]
    .sort((left, right) => {
      if (right.stargazers_count !== left.stargazers_count) {
        return right.stargazers_count - left.stargazers_count
      }

      return Date.parse(right.updated_at) - Date.parse(left.updated_at)
    })
    .slice(0, 4)
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "No GitHub description supplied.",
      language: repo.language,
      stars: repo.stargazers_count,
      url: repo.html_url,
      homepage: safeUrl(repo.homepage),
      topics: repo.topics ?? [],
      updatedAt: repo.updated_at,
    }))

  const blog = safeUrl(user.blog)

  return {
    profile: {
      login: user.login,
      name: user.name ?? user.login,
      bio: user.bio ?? FALLBACK_BIO,
      location: user.location ?? "Cambodia",
      blog,
      githubUrl: user.html_url,
      repoCount: user.public_repos,
      followers: user.followers,
      following: user.following,
    },
    languages: sortedLanguages,
    featuredRepositories,
    socialLinks: [user.html_url, blog].filter(
      (link): link is string => Boolean(link)
    ),
  }
}

export async function buildGitHubPortfolioSnapshot(username: string) {
  const [user, repositories] = await Promise.all([
    fetchGitHubUser(username),
    fetchGitHubRepositories(username),
  ])

  return normalizeGitHubPortfolioSnapshot(user, repositories)
}
