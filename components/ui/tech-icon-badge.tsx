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
        "glass-subcard relative overflow-hidden rounded-[28px] p-3.5",
        className
      )}
    >
      <div className="relative flex items-start gap-3">
        <div className="icon-squircle relative flex size-14 shrink-0 items-center justify-center rounded-[22%]">
          <StackIcon
            name={iconKey}
            variant={variant}
            className="relative size-8"
          />
        </div>

        <div className="min-w-0">
          <p className="text-strong text-sm font-semibold">
            {label}
          </p>
          {description ? (
            <p className="text-soft mt-1 line-clamp-2 text-xs leading-5">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
