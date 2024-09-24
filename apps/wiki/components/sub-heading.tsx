import { SizeType } from "@/types/types";

type SubHeadingProps = {
  text: string;
  size?: SizeType;
};

export function SubHeading({ text: subheading, size }: SubHeadingProps) {
  return <h2 className="text-text/color/primary/title-m text-[26px]">{subheading}</h2>;
}
