import { socialLinks } from "@/lib/data/socials"
import type { ProfileData } from "@/lib/types/portfolio"

export const profileData: ProfileData = {
  name: "Ramy",
  headline:
    "Full-stack developer crafting premium interfaces, production APIs, and AI-assisted systems.",
  location: "Cambodia",
  bio: "Final-year IT engineering student building robust web platforms, mobile experiences, and AI workflows. The focus is on polished product UX, maintainable full-stack architecture, and emerging AI agent systems that feel production-ready instead of experimental.",
  availability: "Open to internship and freelance opportunities",
  primaryCta: {
    label: "Hire me",
    href: "mailto:rosexmee1122@gmail.com?subject=Let's%20build%20something",
    external: true,
  },
  secondaryCta: {
    label: "View projects",
    href: "/projects",
  },
  socials: socialLinks,
  stats: [
    {
      label: "Public repos",
      value: "72",
      detail: "Snapshot from the public GitHub profile.",
    },
    {
      label: "Case studies",
      value: "04",
      detail: "Curated projects chosen for engineering and product range.",
    },
    {
      label: "Top project stars",
      value: "12+",
      detail: "Current public traction on Polymind.",
    },
  ],
  focusAreas: [
    {
      title: "Frontend systems",
      description: "Next.js 16, React 19, Tailwind v4, and motion-driven UI polish.",
    },
    {
      title: "Backend rigor",
      description: "Spring Boot APIs, auth, persistence, and service-layer thinking.",
    },
    {
      title: "AI workflows",
      description: "Telegram bots, multi-model assistants, and MCP-driven tooling.",
    },
  ],
}
