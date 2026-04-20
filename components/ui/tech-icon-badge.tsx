"use client"

import type { ReactElement } from "react"
import StackIcon, { type IconName } from "tech-stack-icons"

import { cn } from "@/lib/utils"

/**
 * Inline SVGs for icon keys that do not exist in tech-stack-icons.
 * Add entries here whenever a slug is missing from the library.
 */
const CUSTOM_ICON_SVGS: Partial<Record<string, ReactElement>> = {
  /* GitHub Octocat — not in the tech-stack-icons package */
  github: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-7"
      fill="currentColor"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  /* Next.js wordmark — library variant="dark" renders white-on-white; use the official black mark */
  nextjs: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-7"
      fill="currentColor"
    >
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.554 4.323-1.198.207-.095.247-.117.219-.133-.02-.012-.99-1.313-2.153-2.89l-2.116-2.867-2.651-3.92a338.603 338.603 0 0 0-2.667-3.92c-.009-.002-.019 1.738-.024 3.866-.007 3.725-.01 3.871-.048 3.944a.458.458 0 0 1-.215.199c-.078.037-.146.044-.494.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-5.18.007-5.18.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.478 2.212 3.208 4.842a699.263 699.263 0 0 0 5.941 8.983l2.396 3.616.12-.079c1.073-.665 2.201-1.608 3.074-2.607a11.875 11.875 0 0 0 2.76-5.353c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.499-.054z" />
    </svg>
  ),
}

interface TechIconBadgeProps {
  label: string
  iconKey: IconName | string
  description?: string
  className?: string
}

export function TechIconBadge({
  label,
  iconKey,
  description,
  className,
}: TechIconBadgeProps) {
  const customIcon = CUSTOM_ICON_SVGS[iconKey as string]

  return (
    <div
      className={cn(
        "brutal-chip brutal-hover flex items-start gap-3 p-3.5",
        "bg-white dark:bg-[#1A1A1A]",
        className
      )}
    >
      {/* Always white bg: keeps single-color SVGs (GitHub, Next.js) visible in any theme */}
      <div className="flex size-12 shrink-0 items-center justify-center border-2 border-black bg-white text-black">
        {customIcon ?? (
          <StackIcon
            name={iconKey as IconName}
            variant="dark"
            className="size-7"
          />
        )}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-black uppercase tracking-[-0.01em] text-black dark:text-white">
          {label}
        </p>
        {description ? (
          <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-relaxed text-black dark:text-[#AAAAAA]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
