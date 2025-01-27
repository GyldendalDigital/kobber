import { SizeType } from "@/types/types"
import { cn } from "@/lib/utils"

type IngressProps = {
  text: string
  size?: SizeType
}

export function Ingress({ text, size = "md" }: IngressProps) {
  return (
    <p
      className={cn("whitespace-pre-wrap text-primary-body text-[#481125ff]", {
        "w-[67.5ch] text-primary-body": size === "display/small",
        "w-[60ch] text-primary-title-s": size === "md",
        "w-[40ch] text-primary-title-m": size === "lg",
      })}
    >
      {text}
    </p>
  )
}
