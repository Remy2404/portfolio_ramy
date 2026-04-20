import type { IconName } from "tech-stack-icons"
import type { ComponentProps, ReactNode } from "react"

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "ai"
  | "tooling"
  | "workflow"

export type SkillProficiency = "Core" | "Advanced" | "Working" | "Exploring"
export type SocialIconName = "github" | "linkedin" | "mail" | "globe" | "facebook"
export type ProjectStatus = "Live" | "Production" | "In Progress" | "Research"
export type GlassAccent = "cyan" | "violet" | "emerald" | "amber" | "slate" | "lime" | "yellow" | "pink"
export type GlassGlow = "soft" | "medium" | "strong"
export type GlassCardSize = "sm" | "md" | "lg" | "xl"
export type BentoItemPriority = "primary" | "secondary" | "support"
export type MotionPreset = "float-up" | "fade" | "glow-lift"

export interface CallToAction {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  label: string
  href: string
  handle: string
  description: string
  emphasis: "primary" | "secondary"
  icon: SocialIconName
}

export interface ProfileStat {
  label: string
  value: string
  detail: string
}

export interface ProfileFocusArea {
  title: string
  description: string
}

export interface ProfileData {
  name: string
  headline: string
  location: string
  bio: string
  availability: string
  primaryCta: CallToAction
  secondaryCta: CallToAction
  socials: SocialLink[]
  stats: ProfileStat[]
  focusAreas: ProfileFocusArea[]
}

export interface TechItem {
  slug: string
  label: string
  iconKey?: IconName
  category: SkillCategoryId
  proficiency?: SkillProficiency
  description: string
}

export interface SkillCategory {
  id: SkillCategoryId
  label: string
  summary: string
  items: TechItem[]
}

export interface ProjectEntry {
  slug: string
  title: string
  summary: string
  description: string
  problem: string
  role: string
  outcome: string
  stack: string[]
  highlights: string[]
  repoUrl: string
  demoUrl?: string
  status: ProjectStatus
  featured: boolean
  accent: GlassAccent
  updatedLabel?: string
}

export interface GlassCardProps extends ComponentProps<"div"> {
  size?: GlassCardSize
  accent?: GlassAccent
  glow?: GlassGlow
  interactive?: boolean
  asChild?: boolean
  children?: ReactNode
}

export interface BentoItemConfig {
  id: string
  area: string
  priority: BentoItemPriority
  minHeight: string
  motionPreset: MotionPreset
}

export interface TestimonialData {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
  color: "violet" | "cyan" | "lime" | "yellow" | "pink"
}

export interface BlogPostData {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export interface PhilosophyData {
  principle: string
  description: string
}

export interface AchievementData {
  id: string
  metric: string
  label: string
  description: string
  accent: "violet" | "cyan" | "lime" | "yellow"
}

export type ExperienceType = "education" | "internship"

export type ExperienceAccent = "violet" | "cyan" | "lime" | "yellow"

export interface ExperienceData {
  id: string
  type: ExperienceType
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string
  accent: ExperienceAccent
}

export interface OpenSourceRepo {
  name: string
  description: string
  stars: number
  forks: number
  language: string
  languageColor: string
  url: string
  accent: "violet" | "cyan" | "lime" | "yellow"
}

export interface OpenSourceData {
  githubUsername: string
  totalStars: number
  totalForks: number
  totalPRs: number
  repos: OpenSourceRepo[]
}
