import Image from "next/image"
import { InformationCardType } from "@/types/types"
import { placeholderImageUrl } from "@/lib/utils"

type InformationCardProps = {
  item: InformationCardType
}

export function InformationCard({ item: { title, text, image } }: InformationCardProps) {
  return (
    <div className="grid min-h-[375px] w-full items-center justify-center gap-[24px] md:w-[270px]">
      <div className="relative size-[274px] overflow-hidden rounded-[16px]">
        <Image src={placeholderImageUrl({})} alt="Bilde" fill className="object-cover" />
      </div>

      <div className="flex min-h-[120px] flex-col items-start justify-start gap-[16px]">
        <h6 className="tex-[#481125ff] text-[22px]">{title}</h6>
        {text && <p className="whitespace-pre-line text-[16px] text-[#A35E70]">{text}</p>}
      </div>
    </div>
  )
}
