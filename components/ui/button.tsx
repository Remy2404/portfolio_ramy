import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 border-black font-black uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-75 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none disabled:pointer-events-none disabled:opacity-50 dark:border-white [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white shadow-[3px_3px_0px_0px_#000] dark:bg-white dark:text-black dark:shadow-[3px_3px_0px_0px_#fff] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] dark:hover:shadow-[5px_5px_0px_0px_#fff]",
        accent:
          "bg-xxx-yellow-300 text-black shadow-[3px_3px_0px_0px_#000] border-black hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000]",
        outline:
          "bg-white text-black shadow-[3px_3px_0px_0px_#000] dark:bg-transparent dark:text-white dark:shadow-[3px_3px_0px_0px_#fff] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] dark:hover:shadow-[5px_5px_0px_0px_#fff]",
        secondary:
          "bg-xxx-violet-200 text-black border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000]",
        ghost:
          "border-transparent shadow-none underline-offset-4 hover:underline dark:border-transparent",
        destructive:
          "bg-xxx-red-300 text-black border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000]",
        link: "border-transparent shadow-none text-primary underline-offset-4 hover:underline dark:border-transparent",
      },
      size: {
        default: "h-10 gap-1.5 px-4 text-xs rounded-sm",
        xs:      "h-7 gap-1 px-2 text-[0.68rem] rounded-sm",
        sm:      "h-8 gap-1.5 px-3 text-xs rounded-sm",
        lg:      "h-12 gap-2 px-6 text-sm rounded-sm",
        icon:    "size-10 rounded-sm",
        "icon-xs": "size-7 rounded-sm",
        "icon-sm": "size-8 rounded-sm",
        "icon-lg": "size-12 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
