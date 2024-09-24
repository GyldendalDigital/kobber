import { cn } from "@/lib/utils";
import { SizeType } from "@/types/types";

type IngressProps = {
  text: string;
  size: SizeType;
};

export function Ingress({ text, size }: IngressProps) {
  return (
    <p
      className={cn("text-text/color/primary/body text-primary-body whitespace-pre-wrap    ", {
        "text-primary-body w-[67.5ch]": size === "sm",
        "text-primary-title-s w-[60ch]": size === "md",
        "text-primary-title-m w-[40ch]": size === "lg",
      })}
    >
      {text}
    </p>
  );
}
