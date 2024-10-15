import { TextCollectionProps } from "@/types/types"
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
    <div className="grid w-full gap-24 px-main md:w-[857px]">
      {label && heading && (
        <div className="grid">
          <label className="text-[24px] text-carmine-525">{label}</label>
          <Heading text={heading} size={size} />
        </div>
      )}
      {!label && heading && <Heading text={heading} size={size} />}
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
