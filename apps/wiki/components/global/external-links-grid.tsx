import Link from "next/link"
import { BRANDING_MANUAL_URL, KOBBER_TEAMS_URL } from "@/lib/constants"
import { IconExternalLink } from "../kobber-icons"

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
    title: "Ikonesett",
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
      <ul className="flex flex-wrap items-center gap-[16px]">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={item.href}
              className="flex gap-[8px] text-[16px] leading-[1.15] text-link hover:underline"
            >
              {item.title}
              <IconExternalLink />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
