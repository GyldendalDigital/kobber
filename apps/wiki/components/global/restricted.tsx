"use client"

import { usePathname } from "next/navigation"
import {
  KobberButton,
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { IconLogin } from "@/components/kobber-icons"

export function Restricted() {
  const pathname = usePathname()

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
      <KobberButton
        variant="main"
        color="carmine"
        icon={<IconLogin className="size-4" />}
        onClick={() => ssoSignIn({ redirectUrl: pathname })}
      >
        Logg inn med SSO
      </KobberButton>
    </div>
  )
}
