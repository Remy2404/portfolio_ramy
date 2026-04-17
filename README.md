# Ramy — Portfolio

> **Full-stack developer & AI builder** · Neo Brutalism design system · Next.js 16 · Tailwind CSS v4

---

## Overview

Personal portfolio for **Phon Ramy**, a Cambodian full-stack developer and final-year IT engineering student. Built with a custom Neo Brutalism design system — bold, high-contrast, and readable across all screen sizes. Content is sourced from a local data model derived from public GitHub activity (no CMS or backend).

---

## Tech Stack

| Layer           | Technology                             |
| --------------- | -------------------------------------- |
| Framework       | Next.js 16 (App Router)                |
| Runtime         | React 19                               |
| Language        | TypeScript 5                           |
| Styling         | Tailwind CSS v4                        |
| Animation       | Motion (Framer Motion v12)             |
| UI Primitives   | Radix UI · shadcn/ui                   |
| Icons           | Lucide React · tech-stack-icons        |
| Theming         | next-themes (light / dark)             |
| Fonts           | Anton · Space Grotesk · JetBrains Mono |
| Package Manager | pnpm                                   |
| Testing         | Vitest                                 |

---

## Getting Started

**Prerequisites:** Node.js 20+, pnpm 9+

```bash
# Clone
git clone https://github.com/Remy2404/portfolio_ramy.git
cd portfolio_ramy

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build for production
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

---

## Design System

The portfolio uses a **Neo Brutalism** design language defined in [`design-system.md`](./design-system.md) and [`app/globals.css`](./app/globals.css).

### Core Rules

- **Sharp corners only** — max `border-radius: 4px`. No pills, no soft cards.
- **Hard offset shadows** — `box-shadow: N px N px 0 #000`. No blur, no glow.
- **2px black borders** everywhere (`border-2 border-black`).
- **Full contrast** — no `text-black/60` or `text-white/70`. Text is either black or white.
- **Hover = brutalist lift** — `translate(-2px, -2px)` + next shadow tier, 80ms linear.

### Color Palette

| Token            | Hex       | Section                     |
| ---------------- | --------- | --------------------------- |
| `xxx-violet-200` | `#A8A6FF` | Hero background             |
| `xxx-cyan-200`   | `#A6FAFF` | Social links                |
| `xxx-lime-200`   | `#B8FF9F` | Tech stack                  |
| `xxx-yellow-200` | `#FFF066` | Header                      |
| `xxx-yellow-300` | `#FFE500` | Primary accent / highlights |
| `xxx-orange-200` | `#FFC29F` | Project cards               |
| `xxx-pink-200`   | `#FFA6F6` | Social alternating fills    |
| Black            | `#000000` | Borders, text, shadows      |
| White            | `#FFFFFF` | Surfaces, contrast panels   |

### Typography

| Role             | Font           | Class          | Weight               |
| ---------------- | -------------- | -------------- | -------------------- |
| Display headings | Anton          | `font-heading` | 400 (visually heavy) |
| Body, labels     | Space Grotesk  | `font-sans`    | 500–900              |
| Eyebrows, code   | JetBrains Mono | `font-mono`    | 900                  |

### Component Classes

```css
.brutal-card    /* border-2 + border-black + shadow-brutal-md */
.brutal-chip    /* border-2 + border-black + shadow-brutal-sm */
.brutal-hover   /* translate(-2,-2) + shadow-brutal-lg on hover */
.brutal-section-violet / -cyan / -lime / -yellow / -pink / -orange
```

---

## Pages

### `/` — Home

Bento grid layout with four main sections:

| Section           | Color  | Content                                    |
| ----------------- | ------ | ------------------------------------------ |
| Hero              | Violet | Name, headline, stats, focus areas, CTAs   |
| Social Links      | Cyan   | GitHub, LinkedIn, Mail, Globe              |
| Tech Stack        | Lime   | Frontend, backend, AI, workflow categories |
| Featured Projects | White  | 4-project bento grid                       |

### `/projects` — Project Archive

Full case studies for each project with structured sections:

- **Status badge** · Date label
- **Title** (Anton display) + one-line tagline
- **Problem / Solution / Impact** (left-bordered structured sections)
- **Role** · **Stack tags** · **Key Highlights** (right panel, black bg)
- **Repository** + **Live demo** CTA buttons

---

## Dark Mode

Full dark mode support via `next-themes`. Same brutalist structure — inverted surfaces.

| Light             | Dark                  |
| ----------------- | --------------------- |
| White backgrounds | `#0A0A0A` / `#111111` |
| Black borders     | White borders         |
| Black shadows     | White shadows         |
| Yellow accents    | Kept as-is            |

---

## Contact

| Channel  | Link                                                                                    |
| -------- | --------------------------------------------------------------------------------------- |
| Email    | [rosexmee1122@gmail.com](mailto:rosexmee1122@gmail.com)                                 |
| GitHub   | [github.com/Remy2404](https://github.com/Remy2404)                                      |
| LinkedIn | [linkedin.com/in/phon-ramy-81025a2a9](https://www.linkedin.com/in/phon-ramy-81025a2a9/) |

---
