import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import type { GlassCardProps } from "@/lib/types/portfolio"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "glass-card-surface group relative isolate overflow-hidden rounded-[32px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,var(--glass-card-highlight),transparent_56%)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:ring-white/6 dark:after:ring-white/6",
  {
    variants: {
      size: {
        sm: "p-6",
        md: "p-7",
        lg: "p-8",
        xl: "p-8 md:p-10",
      },
      accent: {
        cyan: "",
        violet: "",
        emerald: "",
        amber: "",
        slate: "",
      },
      glow: {
        soft: "shadow-[0_20px_60px_-36px_rgba(0,0,0,0.72)]",
        medium: "shadow-[0_28px_80px_-42px_rgba(0,0,0,0.8)]",
        strong: "shadow-[0_34px_110px_-52px_rgba(0,0,0,0.88)]",
      },
      interactive: {
        true: "transition-[transform,border-color,background-color] duration-400 hover:-translate-y-0.5 hover:bg-white/80 dark:hover:bg-white/[0.06]",
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
