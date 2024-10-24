import Image from "next/image"
import { InformationCardType } from "@/types/types"

const placeholderImg =
  "https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHNOGXw0IOuCwpAU2G5LuooDw7hr80JlQf4b9P9IFfWtk~raDTh4vKtoRU-~dqMnlKSCWGwkC-quZBvB-62X1AehdA5onllOcKqs5rzZbc1PgWHRMaH8SzH163B39~ZwYWQgXCaVV1E-KD~51~~TyPgXOx37eaYdV8u3umXFw2zUwugJIt6IQcG06dwifxnJnqcUL~TF6o1fTE-e5fUy9lojqhz0w-zaxRYPlNFjSn8dEAWP~vHDLlLbQzRRqffcL5LS6ZyJDdM-3Tyc7r6wjQzlikG7lL34tiJ7BMdWphToCgc~oYd8bjFqw7fost6Ya4EJTG51gfGh0UJf1Rfs1A__"

type InformationCardProps = {
  item: InformationCardType
}

export function InformationCard({ item: { title, text } }: InformationCardProps) {
  return (
    <div className="grid min-h-[375px] w-full items-center justify-center gap-[24px] md:w-[270px]">
      <div className="relative size-[274px] overflow-hidden rounded-16">
        <Image src={placeholderImg} alt="Bilde" fill className="rounded-[16px] object-cover" />
      </div>

      <div className="flex min-h-[120px] flex-col items-start justify-start gap-[16px]">
        <h6 className="text-[22px] text-text/color/primary/title-s">{title}</h6>
        {text && <p className="whitespace-pre-line text-[16px] text-[#A35E70]">{text}</p>}
      </div>
    </div>
  )
}
