import Image from "next/image"
import { damUrl } from "@/lib/damImageLoader"
import { placeholderImageUrl } from "@/lib/utils"
import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"contactListBlock">

export function ContactListBlock(props: Props) {
  return (
    <div className="contact-list">
      <section className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {team.map((person) => (
          <InformationCard key={person.title} item={person} />
        ))}
      </section>
    </div>
  )
}

type InformationCardType = {
  title: string
  text?: string
  image?: string
}

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

const team: InformationCardType[] = [
  {
    title: "Irén Andresen",
    text: `Designer,
    ansvar for Kobber, merkevare`,
    image: damUrl("6vh-YbtbqI_AAtWFybq3sH", ".jpg"),
  },
  {
    title: "Izelin Tujunen",
    text: `Designer,
    ansvar for Kobber, digital`,
    image: damUrl("6sYJyYjHKJmBOehq0Vvy2G", ".jpg"),
  },
  {
    title: "Karen Keiserud",
    text: `Direktør for kommunikasjon,
    merkevarer og samfunnskontakt`,
    image: damUrl("4LatcGmH4DcAKVvCXfuSPK", ".jpg"),
  },
  {
    title: "Dagfinn Reitan",
    text: `Utvikler,
    ansvar for teknologi`,
    image: damUrl("Eq2wddK0K268EEuoYBSf9y", ".jpg"),
  },
  {
    title: "Dag Von Krogh Munkholt",
    text: "Designer",
    image: damUrl("C_uLX-2MK2UBcx2tVHmiHf", ".jpg"),
  },
  {
    title: "Kevin Minh Nguyen",
    text: "Utvikler",
    image: damUrl("1mSLy00SaTy90DM725qVdX", ".jpg"),
  },
]
