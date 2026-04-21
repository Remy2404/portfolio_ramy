"use client"

import { openSourceData } from "@/lib/data/opensource"
import { GlassCard } from "@/components/ui/glass-card"

function StatChip({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: "violet" | "cyan" | "lime" | "yellow"
}) {
  const colorClasses = {
    violet: "bg-xxx-violet-200 border-xxx-violet-300",
    cyan: "bg-xxx-cyan-200 border-xxx-cyan-300",
    lime: "bg-xxx-lime-200 border-xxx-lime-300",
    yellow: "bg-xxx-yellow-200 border-xxx-yellow-300",
  }

  return (
    <div
      className={`brutal-chip inline-flex items-center gap-2 px-3 py-1.5 ${colorClasses[color]}`}
    >
      <span className="font-mono text-sm font-bold text-accent-surface">{value.toLocaleString()}</span>
      <span className="text-xs font-medium uppercase tracking-wider text-accent-surface-muted">
        {label}
      </span>
    </div>
  )
}

function RepoCard({
  repo,
  index,
}: {
  repo: (typeof openSourceData.repos)[number]
  index: number
}) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <GlassCard
        accent={repo.accent}
        size="md"
        interactive
        className="reveal visible animate-fade-in-up"
        style={{ animationDelay: `${(index + 3) * 80}ms` }}
      >
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="readable-title text-lg text-accent-surface">
              {repo.name}
            </h3>
            <div className="flex shrink-0 items-center gap-1.5 text-accent-surface">
              <span className="font-mono text-xs font-bold">
                {repo.stars}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <p className="line-clamp-2 text-sm font-medium leading-relaxed text-accent-surface-muted">
            {repo.description}
          </p>

          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: repo.languageColor }}
              />
              <span className="text-xs font-medium text-accent-surface-muted">
                {repo.language}
              </span>
            </div>
            <div className="flex items-center gap-1 text-accent-surface-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 2.52-1.33-1.53c-.79.45-1.27.98-1.27 1.56 0 .63.64 1.07 1.65 1.23l1.27.18-.46 1.39c.61.23 1.22.36 1.83.36 4.41 0 7.96-3.88 8.23-8.72h-2.13c-.51 3.53-3.97 6.23-7.62 6.23-2.88 0-5.34-1.71-6.43-4.14l-1.7.32C4.66 8.08 6.97 9.45 9.5 9.45c3.25 0 5.96-2.47 6.16-5.72h-2.18c-.14 1.96-1.88 3.46-3.93 3.46-1.5 0-2.79-.91-3.18-2.23l-1.74.28c.53 2.27 2.67 3.9 5.06 3.9 3.04 0 5.51-2.17 5.51-5.05h-2.14c-.21 1.53-1.55 2.67-3.13 2.67-1.3 0-2.4-.76-2.83-1.91l-1.72.3c.61 1.82 2.19 3.06 4.17 3.06 2.41 0 4.38-1.94 4.38-4.33H15.5c.26 1.52 1.47 2.67 3.03 2.67 1.12 0 2.04-.61 2.55-1.52h.23c2.14 0 3.88-1.74 3.88-3.88h-2.13c-.21 1.53-1.55 2.67-3.13 2.67-1.3 0-2.4-.76-2.83-1.91l-1.73.3C15.4 3.27 12.05 0 12.05 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-xs font-bold">
                {repo.forks}
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </a>
  )
}

export function OpenSourceSection() {
  return (
    <section className="relative">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl space-y-3">
          <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
            Community
          </p>
          <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Open Source.{" "}
            <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
              Building in public.
            </span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-foreground/80">
            Contributing to the ecosystem with tools, libraries, and experiments that others can learn from and build upon.
          </p>
        </div>

        <a
          href={`https://github.com/${openSourceData.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-chip brutal-hover hidden items-center gap-2 px-3 py-1.5 text-sm font-bold sm:inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          @{openSourceData.githubUsername}
        </a>
      </div>

      <div className="mb-8 flex flex-wrap gap-3 reveal visible animate-fade-in">
        <StatChip label="Stars" value={openSourceData.totalStars} color="violet" />
        <StatChip label="Forks" value={openSourceData.totalForks} color="cyan" />
        <StatChip label="PRs" value={openSourceData.totalPRs} color="lime" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {openSourceData.repos.map((repo, index) => (
          <RepoCard key={repo.name} repo={repo} index={index} />
        ))}
      </div>
    </section>
  )
}
