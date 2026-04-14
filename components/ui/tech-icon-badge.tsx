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
        "relative overflow-hidden rounded-[28px] border border-white/18 bg-white/70 p-3 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_20px_60px_-36px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-4 top-2 h-6 rounded-full bg-white/65 blur-md dark:bg-white/8" />
      <div className="relative flex items-start gap-3">
        <div className="relative flex size-14 shrink-0 items-center justify-center rounded-[22%] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(226,236,247,0.82))] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_30px_-18px_rgba(15,23,42,0.4)] dark:border-white/12 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_30px_-18px_rgba(0,0,0,0.72)]">
          <div className="pointer-events-none absolute inset-x-3 top-2 h-4 rounded-full bg-white/70 blur-md dark:bg-white/8" />
          <StackIcon
            name={iconKey}
            variant={variant}
            className="relative size-9"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {label}
          </p>
          {description ? (
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
