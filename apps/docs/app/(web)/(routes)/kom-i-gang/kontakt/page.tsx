import {
  KobberHeading,
  KobberIngress,
  KobberTextLink,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { InformationCardType } from "@/types/types"
import { KOBBER_TEAMS_URL } from "@/lib/constants"
import { damUrl } from "@/lib/damImageLoader"
import { ContentLayout } from "@/components/content-layout"
import { InformationCard } from "@/components/information-card"
import { metaGettingStartedContact } from "./contact.meta"

export const metadata = metaGettingStartedContact

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

export default function ContactPage() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>Spørsmål eller tilbakemelding?</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Kobber eies av kommunikasjonsavdelingen og utvikles for tiden av en arbeidsgruppe fra
          ulike deler av selskapet.
        </p>
        <p>
          Vi har en <KobberTextLink href={KOBBER_TEAMS_URL}>teams-kanal</KobberTextLink> der det er
          mulig å få hjelp, ta opp relevante tema, ønsker og behov. Om du har et spørsmål eller en
          tilbakemelding kan du først sjekke om noen har tatt opp dette eller noe lignende
          tidligere.
        </p>
        <p>
          Ta direkte kontakt med Irén eller Izelin ved forespørsler om nyutvikling av løsninger
          tilknyttet merkevaren, komponenter, logo, nytt markedsmateriell eller ved spørsmål om
          mulige unntak.
        </p>
      </KobberTextWrapper>

      <section className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {team.map((person) => (
          <InformationCard key={person.title} item={person} />
        ))}
      </section>
    </ContentLayout>
  )
}
