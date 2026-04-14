import type { BentoItemConfig, ProjectEntry } from "@/lib/types/portfolio"

export const projects: ProjectEntry[] = [
  {
    slug: "polymind",
    title: "Polymind",
    summary: "A multimodal Telegram assistant orchestrating 50+ models across text, media, and tool-driven workflows.",
    description:
      "Polymind turns a Telegram interface into a practical AI control surface. The system combines multi-provider model routing, multimodal inputs, fallback behavior, and MCP-aware workflows for a much broader product surface than a single-chatbot demo.",
    problem:
      "Most bot experiences stop at simple prompt-response flows. The goal here was to create a more capable assistant that could route between providers, handle media, and keep the product useful when individual models fail.",
    role: "AI systems engineering, bot product design, integration architecture",
    outcome:
      "Delivered a production-facing AI assistant with public adoption, richer multimodal support, and clearer reliability strategies than a single-model bot.",
    stack: ["Python", "Telegram Bot API", "Gemini", "DeepSeek", "OpenRouter", "Docker"],
    highlights: [
      "Orchestrated 50+ models with context-aware selection and fallback behavior.",
      "Supported text, image, document, and voice workflows in one product surface.",
      "Integrated MCP-style tooling concepts for extensible assistant behaviors.",
    ],
    repoUrl: "https://github.com/Remy2404/Polymind",
    demoUrl: "https://t.me/Gemini_AIAssistBot",
    status: "Production",
    featured: true,
    accent: "violet",
    updatedLabel: "Updated Jan 2026",
  },
  {
    slug: "expensevault",
    title: "ExpenseVault",
    summary: "A modern Next.js expense platform for budgets, analytics, goals, realtime updates, and AI-assisted workflows.",
    description:
      "ExpenseVault is the frontend product layer for a fuller financial workflow. It combines authenticated dashboards, analytics, goals, and responsive UI patterns with a stronger product feel than a typical CRUD finance demo.",
    problem:
      "Personal finance tools often ship as dry admin panels. This project focused on making budgeting and expense tracking feel clear, fast, and scalable while still leaving room for AI and realtime support.",
    role: "Frontend architecture, UI systems, product layout, feature integration",
    outcome:
      "Shipped a richer dashboard experience that connects user auth, analytics, and modern interaction patterns into a coherent product shell.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Firebase", "Supabase", "SWR", "Zustand"],
    highlights: [
      "Structured the app with reusable components, hooks, stores, and typed feature boundaries.",
      "Designed for auth, goals, analytics, and realtime-ready experiences instead of a single expense list.",
      "Applied modern UI patterns that can scale into production-facing dashboards.",
    ],
    repoUrl: "https://github.com/Remy2404/expense-tracker-app-nextjs",
    demoUrl: "https://expensevault-ruddy.vercel.app",
    status: "Live",
    featured: true,
    accent: "cyan",
    updatedLabel: "Updated Apr 2026",
  },
  {
    slug: "expense-tracker-api",
    title: "Expense Tracker API",
    summary: "Production-leaning Spring Boot API for budgeting, analytics, auth, persistence, and media-ready backend workflows.",
    description:
      "This backend project demonstrates the service and repository discipline needed behind the financial product. The architecture uses Spring Security, persistence, validation, and integration boundaries to support real application behavior.",
    problem:
      "Frontend polish only matters if the backend contracts are reliable. This API was built to handle the underlying domain logic for expenses, budgets, goals, and authenticated access without collapsing into controller-heavy code.",
    role: "Backend architecture, domain modeling, service/repository structure",
    outcome:
      "Created a backend foundation that supports authenticated financial workflows, analytics endpoints, and future growth into production integrations.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Firebase Admin", "Maven"],
    highlights: [
      "Separated controllers, services, repositories, models, DTOs, and security concerns.",
      "Integrated persistence, authorization, validation, and external provider boundaries.",
      "Kept the API oriented toward real domain workflows rather than endpoint sprawl.",
    ],
    repoUrl: "https://github.com/Remy2404/backend-api-expense-springboot",
    status: "Production",
    featured: true,
    accent: "emerald",
    updatedLabel: "Updated Apr 2026",
  },
  {
    slug: "ecommerce-full-stack",
    title: "Minimal Commerce OS",
    summary: "A premium e-commerce frontend balancing minimalist aesthetics, realtime interactivity, and robust full-stack direction.",
    description:
      "This commerce project explores a more design-conscious product language while still respecting the complexity of a scalable storefront. The repo positions itself around refined visuals, server-side patterns, and richer interaction design.",
    problem:
      "Many commerce builds either over-index on visuals or collapse under architectural shortcuts. The aim here was to combine stronger product design with a more serious engineering posture.",
    role: "Product UI direction, frontend system design, full-stack composition",
    outcome:
      "Established a more premium commerce foundation that can support richer storytelling, server-driven flows, and polished customer interactions.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Socket.io", "Three.js", "GSAP"],
    highlights: [
      "Pushed a premium visual direction while keeping the architecture App Router aware.",
      "Combined realtime, 3D, and animation tooling without flattening the product hierarchy.",
      "Demonstrated stronger product storytelling than a template commerce scaffold.",
    ],
    repoUrl: "https://github.com/Remy2404/ecommerce-full-stack",
    demoUrl: "https://ecommerce-full-stack-pi.vercel.app",
    status: "Live",
    featured: true,
    accent: "amber",
    updatedLabel: "Updated Feb 2026",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectBentoItems: BentoItemConfig[] = [
  {
    id: "polymind",
    area: "xl:col-span-2",
    priority: "primary",
    minHeight: "min-h-[20rem]",
    motionPreset: "glow-lift",
  },
  {
    id: "expensevault",
    area: "",
    priority: "secondary",
    minHeight: "min-h-[18rem]",
    motionPreset: "float-up",
  },
  {
    id: "expense-tracker-api",
    area: "",
    priority: "support",
    minHeight: "min-h-[18rem]",
    motionPreset: "fade",
  },
  {
    id: "ecommerce-full-stack",
    area: "",
    priority: "support",
    minHeight: "min-h-[18rem]",
    motionPreset: "fade",
  },
]
