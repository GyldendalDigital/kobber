import { Display, Lead, TextWrapper } from "@gyldendal/kobber-components/react"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { LoginButton } from "./login-button"

export function Restricted() {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"])}>
      <TextWrapper>
        <Display>
          Kobber
          <div slot="extended">Gyldendals designsystem</div>
        </Display>
        <Lead>
          Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
          bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
          retningslinjer og kode.
        </Lead>
        <div>
          <LoginButton cta textSuffix=" med SSO" />
        </div>
      </TextWrapper>
    </div>
  )
}
