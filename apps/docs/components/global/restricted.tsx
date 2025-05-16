import { KobberHeading, KobberIngress, KobberTextWrapper } from "@gyldendal/kobber-components/react"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { LoginButton } from "./login-button"

export function Restricted() {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"])}>
      <KobberTextWrapper>
        <KobberHeading>
          Kobber
          <br />
          <KobberHeading level="span" font="secondary">
            <em>Gyldendals Designsystem</em>
          </KobberHeading>
        </KobberHeading>
        <KobberIngress>
          Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
          bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
          retningslinjer og kode.
        </KobberIngress>
        <div>
          <LoginButton cta textSuffix=" med SSO" />
        </div>
      </KobberTextWrapper>
    </div>
  )
}
