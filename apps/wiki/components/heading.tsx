import clsx from "clsx"
import { SizeType } from "@/types/types"

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
        className={clsx("truncate text-[#481125]", className, {
          "text-text/primary/size/display/small": size === "display/small",
          "text-primary-display-s": size === "md",
          "text-primary-display-m": size === "lg",
        })}
      >
        {text}
      </h1>
      {children}
    </div>
  )
}
