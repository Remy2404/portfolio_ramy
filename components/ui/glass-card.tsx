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
        cyan: "brutal-section-cyan",
        violet: "brutal-section-violet",
        emerald: "brutal-section-lime",
        amber: "brutal-section-yellow",
        lime: "brutal-section-lime",
        yellow: "brutal-section-yellow",
        pink: "brutal-section-pink",
        slate: "bg-white dark:bg-card",
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
