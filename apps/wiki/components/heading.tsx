import { cn } from "@/lib/utils";
import { SizeType } from "@/types/types";

type HeadingProps = {
  text: string;
  size?: SizeType;
};

export function Heading({ text, size }: HeadingProps) {
  return (
    <h1
      className={cn(" text-text/color/primary/display-s", {
        " text-primary-title-m ": size === "sm",
        "text-primary-display-s": size === "md",
        "text-primary-display-m": size === "lg",
      })}
    >
      {text}
    </h1>
  );
}
