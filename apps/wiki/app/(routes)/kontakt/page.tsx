import { InformationCardType, PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { InformationCard } from "@/components/information-card"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kontakt",
  image: placeholderImageUrl({}),
}

const team: InformationCardType[] = [
  {
    title: "Irén Andresen",
    text: "Designer",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/BZ2zmb-rPF/thumbnail/A-NV_1GZKAT8aR98O8Vu38/*/Kobber_088_thumb.jpg?_=1",
  },
  {
    title: "Izelin Tujunen",
    text: "Designer",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/BZ2zmb-rPF/thumbnail/A-NV_1GZKAT8aR98O8Vu38/*/Kobber_088_thumb.jpg?_=1",
  },
  {
    title: "Karen Keiserud",
    text: `Direktør for kommunikasjon,
    merkevarer og samfunnskontakt`,
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/BZ2zmb-rPF/thumbnail/A-NV_1GZKAT8aR98O8Vu38/*/Kobber_088_thumb.jpg?_=1",
  },
  {
    title: "Dagfinn Reitan",
    text: "Utvikler",
  },
  {
    title: "Dag Von Krogh Munkholt",
    text: "Designer",
  },
  {
    title: "Kevin Minh Nguyen",
    text: "Utvikler",
  },
]

export default function ContactPage() {
  return (
    <main className="flex w-full max-w-[858px] flex-col gap-y-content/gap/horizontal">
      <section className="flex w-full flex-col gap-y-text-section/gap/header-ingress-body/horizontal md:w-[858px]">
        <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">
          Trenger du hjelp?
        </h1>
        <p className="text-[24px] leading-[33.6px] text-[#532D37]">
          Ikke nøl med å ta kontakt om det er noe som er uklart, om du syns noe mangler eller om du
          har en generell tilbakemelding.
        </p>

        <p className="text-16 whitespace-pre-wrap leading-[24px] text-[#532D37]">
          Kobber eies av kommunikasjonsavdelingen i konsern. Det er foreløpig ikke et eget definert
          team, men vi er en arbeidsgruppe fra ulike deler av konsern.
          <br />
          <br />
          Vi har en teams-kanal der det er mulig å ta opp relevante tema, ønsker og behov. Ta
          direkte kontakt med Irén eller Izelin ved forespørsel om nyutvikling som for eksempel
          utvikling av ny løsning, komponenter, logo, nytt materiell eller ved spørsmål om mulige
          unntak.
        </p>
      </section>
      <section className="grid grid-cols-1 items-center justify-center gap-x-section/gap/vertical md:grid-cols-2 lg:grid-cols-3">
        {team.map((person) => (
          <InformationCard key={person.title} item={person} />
        ))}
      </section>
    </main>
  )
}
