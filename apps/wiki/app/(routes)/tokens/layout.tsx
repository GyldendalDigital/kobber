import { SideNav } from "@/components/navigation/side-nav"
import TokenIntroPage from "./hva-er-tokens/page"
import { cn } from "@/lib/utils"
import { metaCollections } from "./kolleksjoner/collections.meta"
import { metaLayout } from "./layout/tokensLayout.meta"
import { metaTokensIntro } from "./hva-er-tokens/tokensIntro.meta"
import pageLayoutStyles from "@/styles/page-layout.module.css"

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
