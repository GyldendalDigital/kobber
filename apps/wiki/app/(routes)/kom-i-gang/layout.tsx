import { cn } from "@/lib/utils"
import { SideNav } from "@/components/navigation/side-nav"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaGettingStartedHow } from "./hvordan-bruke-kobber/how.meta"
import { metaGettingStartedIntro } from "./introduksjon/intro.meta"
import { metaGettingStartedContact } from "./kontakt/contact.meta"

export default function GetStartedLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-layout"], pageLayoutStyles["page-spacing"])}>
      <SideNav
        groups={[
          {
            title: "Introduksjon",
            items: [metaGettingStartedIntro, metaGettingStartedHow, metaGettingStartedContact],
            isOpenInitially: true,
          },
        ]}
      />
      <main className="main">{children}</main>
    </div>
  )
}
