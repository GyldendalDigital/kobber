import Image from "next/image"
import { cn, placeholderImageUrl } from "@/lib/utils"

type HeroImageProps = {
  src: string | null
  width?: number
  height?: number
  className?: string
}

export function HeroImage({ className, src, width = 857, height = 288 }: HeroImageProps) {
  return (
    <div
      className={cn(
        "relative h-[160px] max-w-full overflow-hidden rounded-[16px] md:h-[320px]",
        className
      )}
    >
      <Image
        src={src ?? placeholderImageUrl({})}
        width={width}
        height={height}
        className="object-cover object-top"
        alt="Header Image"
      />
    </div>
  )
}
