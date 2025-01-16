import Image from "next/image"
import { InformationCardType } from "@/types/types"
import { placeholderImageUrl } from "@/lib/utils"

type InformationCardProps = {
  item: InformationCardType
}

export function InformationCard({ item: { title, text, image } }: InformationCardProps) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="relative aspect-square overflow-hidden rounded-[16px] bg-muted">
        <Image
          src={image ?? placeholderImageUrl({})}
          alt="Bilde"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex min-h-[120px] flex-col items-start justify-start">
        <h6 className="text-[22px] text-[#481125ff]">{title}</h6>
        {text && <p className="whitespace-pre-line text-[16px] text-[#A35E70]">{text}</p>}
      </div>
    </div>
  )
}
