"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

import { useHydrated } from "@/hooks/use-hydrated"

interface MotionBlockProps {
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function StaggerGroup({ className, children }: MotionBlockProps) {
  const hydrated = useHydrated()
  const reduceMotion = useReducedMotion()

  if (!hydrated || reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ className, children }: MotionBlockProps) {
  const hydrated = useHydrated()
  const reduceMotion = useReducedMotion()

  if (!hydrated || reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
