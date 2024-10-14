import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type ContentPageProps = {
  image: StaticImageData;
  className?: string;
  children?: React.ReactNode;
};

export function Banner({ image, children, className }: ContentPageProps) {
  return (
    <div
      className={cn(
        "sise-full md:h-[617px] flex flex-col items-cener justify-center gap-48  bg-aubergine-1000",
        className,
      )}
    >
      <div className="relative w-[300px] h-[322px] mx-auto">
        <Image src={"./hero-svg.svg"} fill alt="logo" />
      </div>
      {children}
    </div>
  );
}
