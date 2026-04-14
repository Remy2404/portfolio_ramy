import { profileData } from "@/lib/data/profile"
import { projects, featuredProjects } from "@/lib/data/projects"
import { skillCategories } from "@/lib/data/skills"
import { socialLinks } from "@/lib/data/socials"

describe("portfolio snapshot data", () => {
  it("keeps exactly four curated featured projects for the homepage", () => {
    expect(featuredProjects).toHaveLength(4)
    expect(featuredProjects.every((project) => project.featured)).toBe(true)
  })

  it("covers the required skill categories and keeps workflow content explicit", () => {
    expect(skillCategories.map((category) => category.id)).toEqual([
      "frontend",
      "backend",
      "ai",
      "tooling",
      "workflow",
    ])
    expect(
      skillCategories.find((category) => category.id === "workflow")?.items.length
    ).toBeGreaterThan(0)
  })

  it("keeps contact and repository links present across profile data", () => {
    expect(profileData.primaryCta.href.startsWith("mailto:")).toBe(true)
    expect(socialLinks.some((link) => link.label === "GitHub")).toBe(true)
    expect(projects.every((project) => project.repoUrl.startsWith("https://github.com/"))).toBe(true)
  })
})
