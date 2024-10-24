import { SizeType } from "@/types/types"

type SubHeadingProps = {
  text: string
  size?: SizeType
}

export function SubHeading({ text: subheading, size = "md" }: SubHeadingProps) {
  return <h2 className="text-primary-title-m text-[#481125ff]">{subheading}</h2>
}
