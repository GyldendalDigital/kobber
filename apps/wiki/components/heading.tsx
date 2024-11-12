import { SizeType } from "@/types/types"
import { cn } from "@/lib/utils"

type HeadingProps = {
  size?: SizeType
  children?: React.ReactNode
  className?: string
}

export function Heading({ size = "display/small", children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "truncate text-[#691837]",
        {
          "text-[24px]": size === "xs",
          "text-text/primary/size/display/small": size === "display/small",
          "": size === "md",
          "text-primary-display-m": size === "lg",
        },
        className
      )}
    >
      {children}
    </h1>
  )
}
