import Image from "next/image"
import Link from "next/link"
import { FeatureBoxType } from "@/types/types"

type FeatureBoxGridItemProps = {
  item: FeatureBoxType
}

export function FeatureBoxGridItem({ item: { href, image, title } }: FeatureBoxGridItemProps) {
  return (
    <Link href={href ?? "#"}>
      {/* TODO: switch with label component when it's ready */}
      <div className="relative flex h-full items-end justify-start overflow-hidden rounded-[16px] bg-[#EAE0E1] p-12 transition hover:scale-105">
        {title && (
          <label className="bg-aubergine-25 text-aubergine-850 z-10 line-clamp-1 flex h-[41px] w-[200px] items-center rounded-8 p-8 text-[16px]">
            {title as string}
          </label>
        )}
        {image ? <Image src={image} fill alt="" className="absolute object-cover" /> : null}
      </div>
    </Link>
  )
}
