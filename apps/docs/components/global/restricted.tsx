import { Heading, Ingress, TextWrapper } from "@gyldendal/kobber-components/react"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { LoginButton } from "./login-button"

export function Restricted() {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"])}>
      <TextWrapper>
        <Heading>
          Kobber
          <br />
          <Heading level="span" color-level="secondary">
            <em>Gyldendals Designsystem</em>
          </Heading>
        </Heading>
        <Ingress>
          Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
          bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
          retningslinjer og kode.
        </Ingress>
        <div>
          <LoginButton cta textSuffix=" med SSO" />
        </div>
      </TextWrapper>
    </div>
  )
}
