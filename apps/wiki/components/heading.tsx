import { SizeType } from "@/types/types"
import { cn } from "@/lib/utils"

type HeadingProps = {
  text: string
  size?: SizeType
  children?: React.ReactNode
  className?: string
}

export function Heading({ text, size = "display/small", children, className }: HeadingProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <h1
        className={cn(
          "truncate text-[#481125]",
          {
            "text-text/primary/size/display/small": size === "display/small",
            "": size === "md",
            "text-primary-display-m": size === "lg",
          },
          className
        )}
      >
        {text}
      </h1>
      {children}
    </div>
  )
}
