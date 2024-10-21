import Image from "next/image"
import { IllustrationType } from "@/types/types"
import { cn } from "@/lib/utils"
import { Skeleton } from "./ui/skeleton"

type IllustrationsProps = {
  illustrations: IllustrationType[]
  className?: string
  illuClassName?: string
}

export function Illustrations({ illustrations, className, illuClassName }: IllustrationsProps) {
  return (
    <div
      className={cn(
        "relative flex w-[707px] flex-col items-center justify-center gap-8 overflow-hidden rounded-24 bg-white p-24",
        className
      )}
    >
      {illustrations.map((illustration, index) => (
        <Image
          key={index}
          src={illustration.src}
          height={illustration.fill ? undefined : illustration.height}
          width={illustration.fill ? undefined : illustration.width}
          fill={illustration.fill}
          alt={illustration.alt ?? "Illustration"}
          className={cn("mx-auto object-contain", illuClassName)}
        />
      ))}
    </div>
  )
}

export function IllustrationsSkeleton() {
  return <Skeleton className="h-[300px] w-[707px]" />
}
