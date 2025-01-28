import { cn } from "@/lib/utils"
import { SideNav } from "@/components/navigation/side-nav"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaTokensIntro } from "./hva-er-tokens/tokensIntro.meta"
import { metaCollections } from "./kolleksjoner/collections.meta"
import { metaLayout } from "./layout/tokensLayout.meta"

export default function GetStartedLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-layout"], pageLayoutStyles["page-spacing"])}>
      <SideNav
        groups={[
          {
            title: "Tokens",
            items: [metaTokensIntro, metaCollections, metaLayout],
            isOpenInitially: true,
          },
        ]}
      />
      <main className="main">{children}</main>
    </div>
  )
}
