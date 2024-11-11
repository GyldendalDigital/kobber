import Image from "next/image"
import { placeholderImageUrl } from "@/lib/utils"
import { AspectRatio } from "./ui/aspect-ratio"

type HeroImageProps = {
  src: string | null
}

export function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="relative h-[320px] max-w-full overflow-hidden rounded-[16px]">
      <AspectRatio className="bg-muted" ratio={16 / 9}>
        <Image
          src={src ?? placeholderImageUrl({})}
          fill
          className="object-cover object-top"
          alt="Header Image"
        />
      </AspectRatio>
    </div>
  )
}
