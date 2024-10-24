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
      <div className="relative flex h-full w-[270px] items-end justify-start overflow-hidden rounded-[16px] bg-[#EAE0E1] p-[12px] transition hover:scale-105">
        {title && (
          <label className="z-10 line-clamp-1 flex h-[41px] w-[200px] items-center rounded-[8px] bg-[#FDF9F9] p-[8px] text-[16px] text-[#481125]">
            {title as string}
          </label>
        )}
        {image ? <Image src={image} fill alt="" className="absolute object-cover" /> : null}
      </div>
    </Link>
  )
}
