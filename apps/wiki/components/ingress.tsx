import { cn } from "@/lib/utils";
import { SizeType } from "@/types/types";

type IngressProps = {
  text: string;
  size: SizeType;
};

export function Ingress({ text, size }: IngressProps) {
  return (
    <p
      className={cn("text-text/color/primary/body leading-[33.6px] whitespace-pre-wrap    ", {
        "text-primary-body w-[67.5ch]": size === "sm",
        "text-[18px] w-[60ch]": size === "md",
        "text-[20px] w-[40ch]": size === "lg",
      })}
    >
      {text}
    </p>
  );
}
