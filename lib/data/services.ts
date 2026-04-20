export interface ServiceData {
  id: string
  title: string
  description: string
  features: string[]
  accent: "violet" | "cyan" | "lime" | "yellow" | "pink"
}

export const servicesData: ServiceData[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Crafting responsive, performant interfaces with modern frameworks like React and Next.js. Focus on accessibility, animations, and delightful user experiences.",
    features: [
      "React / Next.js development",
      "Performance optimization",
      "Responsive design systems",
      "Animation & micro-interactions",
    ],
    accent: "violet",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Building robust server-side systems with type-safe APIs, efficient databases, and scalable architecture patterns.",
    features: [
      "REST & GraphQL APIs",
      "Node.js / Python services",
      "Database design & optimization",
      "Authentication & authorization",
    ],
    accent: "cyan",
  },
  {
    id: "ai-workflows",
    title: "AI Workflows & Integration",
    description:
      "Integrating LLMs and AI services into applications with proper prompt engineering, vector databases, and agent patterns.",
    features: [
      "LLM integration (OpenAI, Anthropic)",
      "Vector database setup",
      "RAG & agent architectures",
      "AI-powered features",
    ],
    accent: "lime",
  },
  {
    id: "fullstack",
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from concept to deployment. Bringing together frontend, backend, and infrastructure into cohesive products.",
    features: [
      "End-to-end application build",
      "Cloud deployment (Vercel, AWS)",
      "CI/CD pipelines",
      "Technical architecture",
    ],
    accent: "yellow",
  },
  {
    id: "technical-review",
    title: "Code Review & Consulting",
    description:
      "Improving code quality, identifying bottlenecks, and providing architectural guidance for teams and projects.",
    features: [
      "Code quality audits",
      "Architecture consulting",
      "Performance reviews",
      "Team mentoring",
    ],
    accent: "pink",
  },
]