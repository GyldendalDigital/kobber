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
    <div className="grid w-full gap-[24px] md:w-[711px]">
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
        <p className="whitespace-pre-wrap text-[16px] leading-[25px] text-text/color/primary/body">
          {text}
        </p>
      )}
    </div>
  )
}
