import type { SocialIconName } from "@/lib/types/portfolio"

export interface ContactCta {
  label: string
  href: string
  icon: SocialIconName
  variant: "primary" | "secondary" | "outline"
}

export interface ContactData {
  heading: string
  tagline: string
  ctas: ContactCta[]
}

export const contactData: ContactData = {
  heading: "Let's Work Together",
  tagline:
    "Looking for someone who cares about craft as much as code? I'm open to new opportunities — especially where there's room to build something meaningful.",
  ctas: [
    {
      label: "Hire Me",
      href: "mailto:ramy@example.com?subject=Hiring%20Inquiry",
      icon: "mail",
      variant: "primary",
    },
    {
      label: "View Projects",
      href: "/projects",
      icon: "globe",
      variant: "secondary",
    },
    {
      label: "GitHub",
      href: "https://github.com/ramy2404",
      icon: "github",
      variant: "outline",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ramy2404",
      icon: "linkedin",
      variant: "outline",
    },
  ],
}