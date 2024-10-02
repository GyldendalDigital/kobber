import { SizeType } from "@/types/types";

type SubHeadingProps = {
  text: string;
  size?: SizeType;
};

export function SubHeading({ text: subheading, size = "md" }: SubHeadingProps) {
  return <h2 className="text-text/color/primary/title-m text-primary-title-m">{subheading}</h2>;
}
