import { normalizeGitHubPortfolioSnapshot } from "@/services/github-profile.service"

describe("normalizeGitHubPortfolioSnapshot", () => {
  const user = {
    login: "Remy2404",
    name: "Ramy",
    bio: null,
    location: "cambodia",
    blog: "https://phon-ramy-five.vercel.app/",
    html_url: "https://github.com/Remy2404",
    followers: 13,
    following: 11,
    public_repos: 72,
  }

  const repositories = [
    {
      name: "Polymind",
      description: "AI assistant",
      language: "Python",
      stargazers_count: 12,
      homepage: "https://t.me/Gemini_AIAssistBot",
      html_url: "https://github.com/Remy2404/Polymind",
      topics: ["ai-assistant", "gemini"],
      updated_at: "2026-01-09T08:56:55Z",
    },
    {
      name: "expense-tracker-app-nextjs",
      description: null,
      language: "TypeScript",
      stargazers_count: 0,
      homepage: "https://expensevault-ruddy.vercel.app",
      html_url: "https://github.com/Remy2404/expense-tracker-app-nextjs",
      topics: [],
      updated_at: "2026-04-08T15:53:20Z",
    },
    {
      name: "backend-api-expense-springboot",
      description: null,
      language: "Java",
      stargazers_count: 0,
      homepage: null,
      html_url: "https://github.com/Remy2404/backend-api-expense-springboot",
      topics: [],
      updated_at: "2026-04-08T15:53:30Z",
    },
    {
      name: "misc-repo",
      description: null,
      language: null,
      stargazers_count: 0,
      homepage: "",
      html_url: "https://github.com/Remy2404/misc-repo",
      topics: [],
      updated_at: "2026-01-01T00:00:00Z",
    },
  ]

  it("builds a stable snapshot for the happy path", () => {
    const snapshot = normalizeGitHubPortfolioSnapshot(user, repositories)

    expect(snapshot.profile.name).toBe("Ramy")
    expect(snapshot.profile.githubUrl).toBe("https://github.com/Remy2404")
    expect(snapshot.languages).toEqual([
      { label: "Java", count: 1 },
      { label: "Python", count: 1 },
      { label: "TypeScript", count: 1 },
    ])
    expect(snapshot.featuredRepositories[0]?.name).toBe("Polymind")
  })

  it("fills sad-path gaps when GitHub fields are missing", () => {
    const snapshot = normalizeGitHubPortfolioSnapshot(
      { ...user, bio: null, blog: "" },
      repositories
    )

    expect(snapshot.profile.bio).toContain("Full-stack developer")
    expect(snapshot.profile.blog).toBeNull()
    expect(snapshot.socialLinks).toEqual(["https://github.com/Remy2404"])
  })

  it("keeps edge cases with missing language or homepage from breaking derivation", () => {
    const snapshot = normalizeGitHubPortfolioSnapshot(user, repositories)
    const miscRepo = snapshot.featuredRepositories.find(
      (project) => project.name === "misc-repo"
    )

    expect(miscRepo?.homepage).toBeNull()
    expect(snapshot.languages.some((language) => language.label === "null")).toBe(false)
  })
})
