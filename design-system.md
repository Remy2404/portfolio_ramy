# Design System — Neo Brutalism

> Visual identity for Ramy's portfolio. Bold, raw, playful, high-contrast, memorable.

---

## 1. Color Tokens

### Brand Palette

| Token | Hex | Use |
|---|---|---|
| `xxx-violet-200` | `#A8A6FF` | Hero background, secondary cards |
| `xxx-violet-300` | `#918EFA` | Hover states, accents |
| `xxx-violet-400` | `#807DFA` | Primary semantic role |
| `xxx-pink-200`   | `#FFA6F6` | Social link alternating fills |
| `xxx-pink-300`   | `#FA8CEF` | CTA sections |
| `xxx-red-200`    | `#FF9F9F` | Error, destructive |
| `xxx-red-300`    | `#FA7A7A` | Destructive button |
| `xxx-orange-200` | `#FFC29F` | Project cards, feature sections |
| `xxx-orange-300` | `#FF965B` | Warm accents |
| `xxx-yellow-200` | `#FFF066` | Header background |
| `xxx-yellow-300` | `#FFE500` | Primary accent, highlight blocks, CTA |
| `xxx-lime-200`   | `#B8FF9F` | Tech stack background |
| `xxx-lime-300`   | `#9DFC7C` | Workflow section accents |
| `xxx-cyan-200`   | `#A6FAFF` | Social section background |
| `xxx-cyan-300`   | `#79F7FF` | Stat chip |
| `xxx-cyan-400`   | `#53F2FC` | Semantic accent role |

### Structural Colors
| Token | Value | Use |
|---|---|---|
| `black` | `#000000` | Borders, text, hard shadows |
| `white` | `#FFFFFF` | Surfaces, contrast panels |

### Color Pairing Rules

| Combination | Feel |
|---|---|
| violet + yellow + black | Punchy and expressive |
| cyan + black | Clean and technical |
| lime + black | Fresh and rebellious |
| orange + white + black | Warm and energetic |
| pink + black | Playful and bold |

---

## 2. Typography

### Font Families
| Role | Font | Tailwind class | Use |
|---|---|---|---|
| `font-heading` | Anton | `font-heading` | h1, h2 — display headings only |
| `font-sans` | Space Grotesk | `font-sans` | All body text, h3, labels, buttons |
| `font-mono` | JetBrains Mono | `font-mono` | Eyebrows, metadata, code |

> **Anton note:** Anton ships only weight 400 but renders visually heavy/condensed. Do not add `font-black` with `font-heading`. The font is the weight.

### Scale
| Level | Tailwind | Font | Weight | Use |
|---|---|---|---|---|
| Hero h1 | `text-7xl sm:text-8xl lg:text-9xl` | Anton | — | Hero heading |
| Section h2 | `text-4xl sm:text-5xl` | Anton | — | Section headings |
| Card h3 | `text-xl` | Space Grotesk | `font-black` | Card titles |
| Body lead | `text-base` | Space Grotesk | `font-medium` | Intro paragraphs |
| Body | `text-sm` | Space Grotesk | `font-medium` | General body copy |
| Label / Button | `text-xs` | Space Grotesk | `font-black uppercase` | Nav, buttons |
| Eyebrow | `text-[0.7rem]` | JetBrains Mono | `font-black uppercase` | Section labels |

### Rules
- Headings (`font-heading`): loose tracking `tracking-wide`, line-height `leading-[0.95]`
- Card h3 / labels: `uppercase`, tight tracking `tracking-[-0.01em]`
- Eyebrows: `font-mono uppercase tracking-[0.28em]` — wide and spaced
- Body text: min opacity `text-black/80` — avoid soft gray (`/50` or lower only for eyebrows)
- Allow 2–4 font sizes per section
- Allow slight visual misalignment between eyebrow label and heading for rhythm
- The display number in stat chips uses `font-heading text-5xl`

---

## 3. Spacing

4px base grid. All layout spacing uses steps from this scale.

| Token | Value | Use |
|---|---|---|
| `p-5` | 20px | Subcard / chip internal padding |
| `p-7` | 28px | Section card default padding |
| `p-9` | 36px | Section card large (XL) |
| `gap-4` | 16px | Grid gap between cards |
| `gap-8` | 32px | Grid gap between sections |
| `gap-3` | 12px | Button group gap |

---

## 4. Borders

| Rule | Value |
|---|---|
| Default border | `border-2 border-black` |
| Dark mode border | `dark:border-white` |
| Accent border | `border-xxx-yellow-300` or `border-xxx-lime-300` |
| No rounded borders by default | `rounded-sm` (4px) max for chips |
| Section containers | `rounded-sm` or `rounded-none` |

---

## 5. Shadows

Hard offset box-shadows only. No blur. No glow.

| Token | Value | Use |
|---|---|---|
| `shadow-brutal-sm` | `3px 3px 0 #000` | Chips, tags, small elements |
| `shadow-brutal-md` | `4px 4px 0 #000` | Cards, sections |
| `shadow-brutal-lg` | `6px 6px 0 #000` | Hover state (brutalist lift) |
| `shadow-brutal-xl` | `8px 8px 0 #000` | Featured / primary cards |

Dark mode: replace `#000` with `#fff` in all shadow values.

---

## 6. Component Patterns

### Brutal Card
```
border-2 border-black
background: solid palette color
box-shadow: var(--shadow-brutal-md)
border-radius: 0px or 4px only
```

### Brutal Chip (inline)
```
border-2 border-black
background: white or palette color
box-shadow: var(--shadow-brutal-sm)
```

### Brutal Badge (status)
```
border-2 border-black
background: palette color matching status
font-weight: 900
text-transform: uppercase
```

### Button — Default
```
background: black  →  text: white
border: 2px solid black
shadow: 3px 3px 0 black
hover: translate(-2px, -2px) + shadow-lg
active: translate(1px, 1px) + no shadow
```

### Button — Accent (CTA)
```
background: xxx-yellow-300  →  text: black
border: 2px solid black
shadow: 3px 3px 0 black
hover: translate(-2px, -2px) + shadow-lg
```

### Button — Outline
```
background: white  →  text: black
border: 2px solid black
shadow: 3px 3px 0 black
hover: translate(-2px, -2px) + shadow-lg
```

---

## 7. Motion Principles

Neo Brutalism motion is **abrupt, punchy, immediate** — not smooth or luxurious.

| Pattern | Value |
|---|---|
| Hover duration | `80ms linear` |
| Active/press | `75ms` — translate back +1px |
| Hover transform | `translate(-2px, -2px)` |
| Hover shadow | Grow to next shadow tier |
| No: | easing curves, spring, blur motion, slow fade |

```css
.brutal-hover {
  transition: transform 80ms linear, box-shadow 80ms linear;
}
.brutal-hover:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
}
```

Respect `prefers-reduced-motion` — all transitions collapse to `0.01ms`.

---

## 8. Section Color Map

| Section | Background | Accent |
|---|---|---|
| Header | `xxx-yellow-200` | Black (borders, text) |
| Hero | `xxx-violet-200` | Yellow (highlight blocks, badge) |
| Social Links | `xxx-cyan-200` | Black (icon boxes) |
| Tech Stack | `xxx-lime-200` | Black (workflow panel reversed) |
| Featured Projects | White | Rotating palette fills per card |
| Footer | Black | `xxx-yellow-300` (accent links, stripe) |

---

## 9. Layout Principles

- Max content width: `1600px` (desktop), `1680px` (2xl)
- Base horizontal padding: `px-4 sm:px-6 lg:px-8`
- Grid: asymmetric bento — hero takes more space than social panel
- Overlapping not used yet; stickers and badges can overlap on hero in future
- Section spacing: `gap-8` between all major sections

---

## 10. Dark Mode

Dark Brutalism: same bold structure, inverted surfaces.

| Light | Dark equivalent |
|---|---|
| White backgrounds | `#0A0A0A` / `#111111` |
| Black borders | White borders |
| Black shadows | White shadows |
| Yellow accents | Kept as-is (high contrast on dark) |
| Violet fills | Slightly desaturated |

---

*This file is the source of truth for all visual decisions. Component code must reference tokens — no hardcoded hex values in component files.*
