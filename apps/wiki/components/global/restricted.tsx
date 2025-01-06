import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { LoginButton } from "./login-button"

export function Restricted() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-start justify-center gap-content/gap/horizontal">
      <KobberTextWrapper>
        <KobberHeading>
          Kobber
          <br />
          <span className="font-lyon text-[#DC134F]">Gyldendals Designsystem</span>
        </KobberHeading>
        <KobberIngress>
          Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
          bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
          retningslinjer og kode.
        </KobberIngress>
      </KobberTextWrapper>
      <LoginButton cta textSuffix=" med SSO" />
    </div>
  )
}
