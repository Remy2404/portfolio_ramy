import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import type { GlassCardProps } from "@/lib/types/portfolio"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "group relative isolate overflow-hidden rounded-[32px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(243,249,255,0.56))] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-px before:rounded-[inherit] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_30%,transparent_75%,rgba(255,255,255,0.06))] before:opacity-80 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:ring-white/8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72))] dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_35%,transparent_80%,rgba(255,255,255,0.03))]",
  {
    variants: {
      size: {
        sm: "p-5",
        md: "p-6",
        lg: "p-7",
        xl: "p-8 md:p-10",
      },
      accent: {
        cyan:
          "[background-image:linear-gradient(180deg,rgba(255,255,255,0.84),rgba(243,249,255,0.56)),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_36%)] dark:[background-image:linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72)),radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%)]",
        violet:
          "[background-image:linear-gradient(180deg,rgba(255,255,255,0.84),rgba(246,243,255,0.56)),radial-gradient(circle_at_top_right,rgba(167,139,250,0.18),transparent_36%)] dark:[background-image:linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72)),radial-gradient(circle_at_top_right,rgba(167,139,250,0.14),transparent_36%)]",
        emerald:
          "[background-image:linear-gradient(180deg,rgba(255,255,255,0.84),rgba(242,255,248,0.56)),radial-gradient(circle_at_top_right,rgba(52,211,153,0.18),transparent_36%)] dark:[background-image:linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72)),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_36%)]",
        amber:
          "[background-image:linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,248,240,0.56)),radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_36%)] dark:[background-image:linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72)),radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_36%)]",
        slate:
          "[background-image:linear-gradient(180deg,rgba(255,255,255,0.84),rgba(243,245,247,0.56)),radial-gradient(circle_at_top_right,rgba(148,163,184,0.16),transparent_36%)] dark:[background-image:linear-gradient(180deg,rgba(9,20,38,0.82),rgba(5,12,24,0.72)),radial-gradient(circle_at_top_right,rgba(148,163,184,0.14),transparent_36%)]",
      },
      glow: {
        soft: "shadow-[0_28px_90px_-48px_rgba(15,23,42,0.26)] dark:shadow-[0_32px_100px_-52px_rgba(2,8,23,0.78)]",
        medium:
          "shadow-[0_32px_100px_-48px_rgba(14,116,144,0.24)] dark:shadow-[0_34px_110px_-52px_rgba(8,145,178,0.22)]",
        strong:
          "shadow-[0_40px_130px_-52px_rgba(14,116,144,0.32)] dark:shadow-[0_42px_140px_-56px_rgba(34,211,238,0.24)]",
      },
      interactive: {
        true: "transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-white/30 dark:hover:border-white/16",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      accent: "cyan",
      glow: "soft",
      interactive: false,
    },
  }
)

export function GlassCard({
  className,
  size,
  accent,
  glow,
  interactive,
  asChild = false,
  ...props
}: GlassCardProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="glass-card"
      className={cn(
        glassCardVariants({ size, accent, glow, interactive }),
        className
      )}
      {...props}
    />
  )
}
