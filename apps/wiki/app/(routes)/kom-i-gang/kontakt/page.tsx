import { InformationCardType, PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { InformationCard } from "@/components/information-card"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kontakt",
  image: placeholderImageUrl({}),
}

const team: InformationCardType[] = [
  {
    title: "Irén Andresen",
    text: `Designer,
    ansvar for Kobber, merkevare`,
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
  {
    title: "Izelin Tujunen",
    text: `Designer,
    ansvar for Kobber, digital`,
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
  {
    title: "Karen Keiserud",
    text: `Direktør for kommunikasjon,
    merkevarer og samfunnskontakt`,
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
  {
    title: "Dagfinn Reitan",
    text: `Utvikler,
    ansvar for teknologi`,
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
  {
    title: "Dag Von Krogh Munkholt",
    text: "Designer",
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
  {
    title: "Kevin Minh Nguyen",
    text: "Utvikler",
    image: damImageUrl("4LatcGmH4DcAKVvCXfuSPK"),
  },
]

export default function ContactPage() {
  return (
    <main className="flex w-full max-w-[858px] flex-col gap-y-content/gap/horizontal">
      <section className="flex w-full flex-col gap-y-text-section/gap/header-ingress-body/horizontal md:w-[858px]">
        <ArticleWrapper>
          <h2 className="text-[48px] text-[#691837]">Spørsmål eller tilbakemelding?</h2>
          <Ingress>
            Ikke nøl med å ta kontakt om det er noe som er uklart, om du syns noe mangler eller om
            du har en generell tilbakemelding.
          </Ingress>
          <Body>
            Kobber eies av kommunikasjonsavdelingen og utvikles for tiden av en arbeidsgruppe fra
            ulike deler av selskapet.
            <br />
            <br />
            Vi har en teams-kanal der det er mulig å få hjelp, ta opp relevante tema, ønsker og
            behov. Om du har et spørsmål eller en tilbakemelding kan du først sjekke om noen har
            tatt opp dette eller noe lignende tidligere.
            <br />
            <br />
            Ta direkte kontakt med Irén eller Izelin ved forespørsler om nyutvikling av løsninger
            tilknyttet merkevaren, komponenter, logo, nytt markedsmateriell eller ved spørsmål om
            mulige unntak.
          </Body>
        </ArticleWrapper>
      </section>
      <section className="grid grid-cols-1 items-center justify-center gap-x-section/gap/vertical md:grid-cols-2 lg:grid-cols-3">
        {team.map((person) => (
          <InformationCard key={person.title} item={person} />
        ))}
      </section>
    </main>
  )
}
