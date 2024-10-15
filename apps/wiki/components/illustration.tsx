import Image from "next/image"
import { cn } from "@/lib/utils"
import { AspectRatio } from "./ui/aspect-ratio"

type IllustrationProps = {
  src: string
  className?: string
  illuClassName?: string
}

export function Illustration({ src, className, illuClassName }: IllustrationProps) {
  return (
    <div
      className={cn(
        "relative flex w-[673px] items-center justify-center overflow-hidden rounded-24",
        className
      )}
    >
      <AspectRatio ratio={16 / 9} className="rounded-24 bg-white">
        <Image
          src={src}
          fill
          alt="Illustration"
          className={cn("object-contain p-24", illuClassName)}
        />
      </AspectRatio>
    </div>
  )
}
