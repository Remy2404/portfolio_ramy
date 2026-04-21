import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import type { GlassCardProps } from "@/lib/types/portfolio"
import { cn } from "@/lib/utils"

const brutalCardVariants = cva(
  "brutal-card relative isolate overflow-hidden",
  {
    variants: {
      size: {
        sm: "p-5",
        md: "p-6",
        lg: "p-7",
        xl: "p-7 md:p-9",
      },
      accent: {
        cyan: "brutal-section-cyan text-accent-surface",
        violet: "brutal-section-violet text-accent-surface",
        emerald: "brutal-section-lime text-accent-surface",
        amber: "brutal-section-yellow text-accent-surface",
        lime: "brutal-section-lime text-accent-surface",
        yellow: "brutal-section-yellow text-accent-surface",
        pink: "brutal-section-pink text-accent-surface",
        slate: "bg-card text-card-foreground",
      },
      glow: {
        soft: "",
        medium: "",
        strong: "",
      },
      interactive: {
        true: "brutal-hover cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      accent: "slate",
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
      data-slot="brutal-card"
      className={cn(
        brutalCardVariants({ size, accent, glow, interactive }),
        className
      )}
      {...props}
    />
  )
}
