import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const brutalTagVariants = cva(
  "inline-flex items-center justify-center border-2 border-black font-black uppercase tracking-[0.1em] dark:border-white",
  {
    variants: {
      color: {
        yellow:  "bg-xxx-yellow-300 text-black",
        violet:  "bg-xxx-violet-200 text-black",
        cyan:    "bg-xxx-cyan-200 text-black",
        lime:    "bg-xxx-lime-200 text-black",
        pink:    "bg-xxx-pink-200 text-black",
        orange:  "bg-xxx-orange-200 text-black",
        red:     "bg-xxx-red-200 text-black",
        black:   "bg-black text-white dark:bg-white dark:text-black",
        white:   "bg-white text-black",
      },
      size: {
        xs: "px-2 py-0.5 text-[0.6rem]",
        sm: "px-3 py-1 text-[0.65rem]",
        md: "px-3 py-1.5 text-xs",
      },
      shadow: {
        true:  "shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]",
        false: "",
      },
    },
    defaultVariants: {
      color:  "yellow",
      size:   "sm",
      shadow: false,
    },
  }
)

interface BrutalTagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof brutalTagVariants> {}

export function BrutalTag({ className, color, size, shadow, ...props }: BrutalTagProps) {
  return (
    <span
      className={cn(brutalTagVariants({ color, size, shadow }), className)}
      {...props}
    />
  )
}
