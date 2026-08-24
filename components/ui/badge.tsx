import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
  {
    variants: {
      variant: {
        default:
          "bg-surface-container text-on-surface-variant border-outline-variant/30",
        success:
          "bg-success-container text-on-success-container border-success/20",
        warning:
          "bg-warning-container text-on-warning-container border-warning/20",
        error:
          "bg-error-container text-on-error-container border-error/20",
        info:
          "bg-info-container text-on-info-container border-info/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
