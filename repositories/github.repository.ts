const GITHUB_API_BASE = "https://api.github.com"

export interface GitHubUserRecord {
  login: string
  name: string | null
  bio: string | null
  location: string | null
  blog: string | null
  html_url: string
  followers: number
  following: number
  public_repos: number
}

export interface GitHubRepoRecord {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  homepage: string | null
  html_url: string
  topics: string[]
  updated_at: string
}

function createHeaders() {
  const headers = new Headers({
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-ramy",
  })

  if (process.env.GITHUB_TOKEN) {
    headers.set("Authorization", `Bearer ${process.env.GITHUB_TOKEN}`)
  }

  return headers
}

async function readGitHub<T>(pathname: string) {
  const response = await fetch(`${GITHUB_API_BASE}${pathname}`, {
    headers: createHeaders(),
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${pathname}: ${response.status}`)
  }

  return (await response.json()) as T
}

export async function fetchGitHubUser(username: string) {
  return readGitHub<GitHubUserRecord>(`/users/${username}`)
}

export async function fetchGitHubRepositories(username: string) {
  return readGitHub<GitHubRepoRecord[]>(
    `/users/${username}/repos?per_page=100&sort=updated`
  )
}
