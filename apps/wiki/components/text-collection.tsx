import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { SizeType } from "@/types/types";
import { SubHeading } from "./sub-heading";
import { Ingress } from "./ingress";

type TextCollectionProps = {
  heading: string;
  subheading?: string;
  ingress?: string;
  size?: SizeType;
};

export function TextCollection({ heading, subheading, ingress, size = "md" }: TextCollectionProps) {
  return (
    <div
      className={cn("w-full px-main md:w-[857px]  grid", {
        "gap-32": size === "sm",
        "gap-48": size === "md",
        "gap-56": size === "lg",
      })}
    >
      <Heading text={heading} size={size} />
      {subheading && <SubHeading text={subheading} size={size} />}
      {ingress && <Ingress text={ingress} size={size} />}
    </div>
  );
}
