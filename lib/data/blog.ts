import type { BlogPostData } from "@/lib/types/portfolio"

export const blogPosts: BlogPostData[] = [
  {
    slug: "building-resilient-ai-workflows",
    title: "Building Resilient AI Workflows in Production",
    excerpt: "Lessons learned from deploying multi-model AI assistants that actually work reliably at scale.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "AI Engineering",
  },
  {
    slug: "nextjs-16-performance-patterns",
    title: "Next.js 16 Performance Patterns That Actually Matter",
    excerpt: "A deep dive into the optimization techniques that moved our Core Web Vitals from good to excellent.",
    date: "2026-02-28",
    readTime: "12 min read",
    category: "Frontend",
  },
  {
    slug: "systems-thinking-product-development",
    title: "Systems Thinking in Product Development",
    excerpt: "How viewing your product as a system — not a feature list — leads to more maintainable code and happier users.",
    date: "2026-01-20",
    readTime: "6 min read",
    category: "Product",
  },
]