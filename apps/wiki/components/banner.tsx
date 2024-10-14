import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type ContentPageProps = {
  image: StaticImageData;
  className?: string;
};

export function Banner({ image, className }: ContentPageProps) {
  return (
    <div
      className={cn("sise-full md:h-[617px]   bg-aubergine-1000", className)}
    ></div>
  );
}
