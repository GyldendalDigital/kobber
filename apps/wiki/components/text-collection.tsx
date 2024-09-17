import { cn } from "@/lib/utils";

type TextCollectionProps = {
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg";
};

export function TextCollection({ title, description, size = "md" }: TextCollectionProps) {
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
          "text-[30px]": size === "sm",
          "text-[48px]": size === "md",
          "text-[62px]": size === "lg",
        })}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn("text-text/color/primary/title-m leading-[33.6px]    ", {
            "text-[14px] w-[67.5ch]": size === "sm",
            "text-[18px] w-[60ch]": size === "md",
            "text-[20px] w-[40ch]": size === "lg",
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
}
