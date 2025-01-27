import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

type ContentPageProps = {
  image: StaticImageData
  className?: string
  children?: React.ReactNode
}

export function Banner({ image, children, className }: ContentPageProps) {
  return (
    <div
      className={cn(
        "sise-full items-cener bg-[#28000E flex flex-col justify-center gap-48 md:h-[617px]",
        className
      )}
    >
      <div className="relative mx-auto h-[322px] w-[200px] md:w-[300px]">
        <Image src={"./hero-svg.svg"} fill alt="logo" />
      </div>
      {children}
    </div>
  )
}
