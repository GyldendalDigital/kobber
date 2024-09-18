import { cn } from "@/lib/utils";

type TextCollectionProps = {
  heading: string;
  subheading?: string;
  ingress?: string;
  size?: "sm" | "md" | "lg";
};

export function TextCollection({ heading, subheading, ingress, size = "md" }: TextCollectionProps) {
  return (
    <div
      className={cn("w-full md:w-[857px]  grid", {
        "gap-3": size === "sm",
        "gap-7": size === "md",
        "gap-10": size === "lg",
      })}
    >
      <h1
        className={cn("text-text/color/primary/display-s ", {
          "text-[26px]": size === "sm",
          "text-[48px]": size === "md",
          "text-[62px]": size === "lg",
        })}
      >
        {heading}
      </h1>
      {subheading && <h2 className="text-text/color/primary/title-m text-[26px]">{subheading}</h2>}
      {ingress && (
        <p
          className={cn("text-text/color/primary/body leading-[33.6px] whitespace-pre-wrap    ", {
            "text-body w-[67.5ch]": size === "sm",
            "text-[18px] w-[60ch]": size === "md",
            "text-[20px] w-[40ch]": size === "lg",
          })}
        >
          {ingress}
        </p>
      )}
    </div>
  );
}
