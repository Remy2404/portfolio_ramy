"use client"

import { useTheme } from "next-themes"
import StackIcon, { type IconName } from "tech-stack-icons"

import { useHydrated } from "@/hooks/use-hydrated"
import { cn } from "@/lib/utils"

interface TechIconBadgeProps {
  label: string
  iconKey: IconName
  description?: string
  className?: string
}

export function TechIconBadge({
  label,
  iconKey,
  description,
  className,
}: TechIconBadgeProps) {
  const { resolvedTheme } = useTheme()
  const hydrated = useHydrated()
  const variant = hydrated && resolvedTheme === "light" ? "light" : "dark"

  return (
    <div
      className={cn(
        "brutal-chip brutal-hover flex items-start gap-3 bg-white p-3.5",
        className
      )}
    >
      <div className="flex size-12 shrink-0 items-center justify-center border-2 border-black bg-white">
        <StackIcon
          name={iconKey}
          variant={variant}
          className="size-7"
        />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-black uppercase tracking-[-0.01em] text-black">
          {label}
        </p>
        {description ? (
          <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-relaxed text-black">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
