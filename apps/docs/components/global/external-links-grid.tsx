import { BRANDING_MANUAL_URL, KOBBER_TEAMS_URL } from "@/lib/constants"
import { ExternalLink } from "./external-link"

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
            <ExternalLink href={item.href} highlighted>
              {item.title}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
