import { TextCollectionProps } from "@/types/types"
import { Heading } from "./heading"
import { Ingress } from "./ingress"
import { SubHeading } from "./sub-heading"

/** @deprecated use ArticleWrapper + Heading + Ingress + <p>  */
export function TextCollection({
  label,
  heading,
  subheading,
  ingress,
  size = "display/small",
  text,
}: TextCollectionProps) {
  return (
    <div className="grid w-full gap-[24px] md:w-[711px]">
      {label && heading && (
        <div className="grid">
          <label className="text-[24px] text-[#DC134F]">{label}</label>
          <Heading size={size}>{heading}</Heading>
        </div>
      )}
      {!label && heading && <Heading size={size}>{heading}</Heading>}
      {subheading && <SubHeading>{subheading}</SubHeading>}
      {ingress && <Ingress text={ingress} size={size} />}
      {text && (
        <p className="whitespace-pre-wrap text-[16px] leading-[25px] text-[#481125ff]">{text}</p>
      )}
    </div>
  )
}
