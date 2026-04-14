import { siteConfig } from "@/lib/config/site"
import type { SocialLink } from "@/lib/types/portfolio"

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    handle: "@Remy2404",
    description: "Code, experiments, and public project history.",
    emphasis: "primary",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    handle: "phon-ramy-81025a2a9",
    description: "Professional profile, networking, and opportunities.",
    emphasis: "primary",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: siteConfig.email,
    handle: "rosexmee1122@gmail.com",
    description: "Best route for internship, freelance, or collaboration.",
    emphasis: "primary",
    icon: "mail",
  },
  {
    label: "Portfolio Archive",
    href: siteConfig.portfolio,
    handle: "phon-ramy-five.vercel.app",
    description: "Previous public portfolio and personal web presence.",
    emphasis: "secondary",
    icon: "globe",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100023470206503",
    handle: "Ramy on Facebook",
    description: "Secondary social channel from the public GitHub profile.",
    emphasis: "secondary",
    icon: "facebook",
  },
]
