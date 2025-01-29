import Image from "next/image"
import { cn, placeholderImageUrl } from "@/lib/utils"

type Props = React.HTMLAttributes<HTMLElement> & Partial<Pick<HTMLImageElement, "src" | "alt">>

export function HeroImage({ className, src, alt = "" }: Props) {
  return (
    <div
      className={cn(
        "relative h-[30vw] max-h-80 overflow-hidden rounded-[1rem] md:h-[20vw]",
        className
      )}
    >
      <Image
        src={src ?? placeholderImageUrl({})}
        fill
        className="object-cover object-top"
        alt={alt}
      />
    </div>
  )
}
