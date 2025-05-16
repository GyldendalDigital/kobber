import Image from "next/image"
import { KobberHeading } from "@gyldendal/kobber-components/react"
import { damUrl } from "@/lib/damImageLoader"
import { placeholderImageUrl } from "@/lib/utils"
import type { PagebuilderType } from "../page-builder.types"
import styles from "./contact-list-block.module.css"

type Props = PagebuilderType<"contactListBlock">

export function ContactListBlock(props: Props) {
  return (
    <div className="contact-list">
      <section className={styles["wrapper"]}>
        {team.map((person) => (
          <InformationCard key={person.title} item={person} />
        ))}
      </section>
    </div>
  )
}

type InformationCardType = {
  title: string
  subtitle?: string
  text?: string
  image?: string
}

type InformationCardProps = {
  item: InformationCardType
}

export function InformationCard({ item: { title, text, image } }: InformationCardProps) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-image"]}>
        <Image src={image ?? placeholderImageUrl({})} alt="Bilde" fill />
      </div>

      <div className={styles["card-content"]}>
        <KobberHeading variant="title medium">{title}</KobberHeading>
        {text && <p>{text}</p>}
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
