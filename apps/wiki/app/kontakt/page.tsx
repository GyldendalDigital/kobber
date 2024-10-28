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
    text: `Senior designer
    ansvarlig for Kobber - merkevare`,
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/BZ2zmb-rPF/thumbnail/A-NV_1GZKAT8aR98O8Vu38/*/Kobber_088_thumb.jpg?_=1",
  },
  {
    title: "Izelin Tujunen",
    text: `Senior Designer
    ansvarlig for Kobber - designssytem`,
  },
  {
    title: "Dagfinn Reitan",
    text: `Senior utvikler
    ansvarlig for teknisk utvikling`,
  },
  {
    title: "Dag Von Krogh Munkholt",
    text: "Designer",
  },
  {
    title: "Kevin Minh Nguyen",
    text: "Utvikler",
  },
  {
    title: "Karen Keiserud",
    text: `Direktør for kommunikasjon,
    merkevarer og samfunnskontakt`,
  },
]

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full flex-col gap-y-content/gap/horizontal">
      <section className="gap-y-text-section/gap/header-ingress-body/horizontal flex w-full flex-col md:w-[858px]">
        <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">
          Trenger du hjelp?
        </h1>
        <p className="text-[24px] leading-[33.6px] text-[#532D37]">
          Ikke nøl å ta kontakt med oss om du spørsmål, innspill og/eller tilbakemeldinger.
        </p>

        <p className="text-16 whitespace-pre-wrap leading-[24px] text-[#532D37]">
          Se gjerne en runde på denne siden, eller sjekk Slack-kanalen vår “Kobber” hvis det er noe
          du lurer på. Sjansen kan jo være at temaet du lurer på er noe som har blitt diskutert
          tidligere.
          <br />
          <br />
          Ellers vil én designer og utvikler også være tilgjengelig for drop-in hver torsdag på
          “Hjeeelp” i Bing 4.etasje. Så ta med deg kaffekoppen, så setter vi oss ned å ser på
          utfordringen sammen!
        </p>
      </section>
      <section className="grid gap-y-section/gap/horizontal">
        <h3 className="text-center text-[24px] text-[#532D37] md:text-left">Vi i Kobber teamet</h3>
        <div className="grid grid-cols-1 items-center justify-center gap-x-section/gap/vertical md:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <InformationCard key={person.title} item={person} />
          ))}
        </div>
      </section>
    </main>
  )
}
