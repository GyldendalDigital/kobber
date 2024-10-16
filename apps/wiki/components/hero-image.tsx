import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"

type HeroImageProps = {
  src: string
}

export function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="relative h-320 max-w-full overflow-hidden rounded-16">
      <AspectRatio className="bg-muted" ratio={16 / 9}>
        <Image src={src} fill className="object-cover" alt="Header Image" />
      </AspectRatio>
    </div>
  )
}
