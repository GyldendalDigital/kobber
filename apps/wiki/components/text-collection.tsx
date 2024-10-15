import { TextCollectionProps } from "@/types/types"
import { cn } from "@/lib/utils"
import { Heading } from "./heading"
import { Ingress } from "./ingress"
import { SubHeading } from "./sub-heading"

export function TextCollection({
  label,
  heading,
  subheading,
  ingress,
  size = "md",
  text,
}: TextCollectionProps) {
  return (
    <div
      className={cn("grid w-full px-main md:w-[857px]", {
        "gap-32": size === "sm",
        "gap-48": size === "md",
        "gap-56": size === "lg",
      })}
    >
      <div className="grid">
        {label && <label className="text-[24px] text-carmine-525">{label}</label>}
        {heading && <Heading text={heading} size={size} />}
      </div>
      {subheading && <SubHeading text={subheading} size={size} />}
      {ingress && <Ingress text={ingress} size={size} />}
      {text && (
        <p className="w-[67.5ch] whitespace-pre-wrap text-primary-body text-text/color/primary/body">
          {text}
        </p>
      )}
    </div>
  )
}
