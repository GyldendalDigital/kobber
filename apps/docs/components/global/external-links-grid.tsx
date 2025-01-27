import { KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { BRANDING_MANUAL_URL, KOBBER_TEAMS_URL } from "@/lib/constants"

const links = [
  {
    title: "Merkevaremanual",
    href: BRANDING_MANUAL_URL,
  },
  {
    title: "Gyldendallogo",
    href: "https://dam-p-gyldendal.pqcloud.eu/app/#/s/BI54jcT1Vj",
  },
  {
    title: "Ikonsett",
    href: "https://dam-p-gyldendal.pqcloud.eu/?w=ZqxPo6bFjq",
  },

  {
    title: "Kobber i Teams",
    href: KOBBER_TEAMS_URL,
  },
  {
    title: "Kobber i Slack",
    href: "https://gyldendal.slack.com/archives/C05AXLJKRST",
  },
]

export function ExternalLinksGrid() {
  return (
    <section className="grid gap-y-section/gap/horizontal">
      <ul className="flex flex-wrap items-center gap-4">
        {links.map((item, index) => (
          <li key={index}>
            <KobberLink href={item.href}>{item.title}</KobberLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
