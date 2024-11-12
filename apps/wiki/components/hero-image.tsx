import Image from "next/image"
import { placeholderImageUrl } from "@/lib/utils"

type HeroImageProps = {
  src: string | null
}

export function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="relative h-[320px] max-w-full overflow-hidden rounded-[16px]">
      <Image
        src={src ?? placeholderImageUrl({})}
        fill
        className="object-cover object-top"
        alt="Header Image"
      />
    </div>
  )
}
