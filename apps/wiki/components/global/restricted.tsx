"use client"

import { usePathname } from "next/navigation"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { Heading } from "../heading"
import { ArticleWrapper, Button, Ingress } from "../kobber-components"

export function Restricted() {
  const pathname = usePathname()

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-start justify-center gap-content/gap/horizontal">
      <ArticleWrapper>
        <Heading>
          Kobber
          <br />
          <span className="font-lyon text-[#DC134F]">Gyldendals Designsystem</span>
        </Heading>
        <Ingress>
          Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
          bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
          retningslinjer og kode.
        </Ingress>
      </ArticleWrapper>
      <Button variant="main" color="carmine" onClick={() => ssoSignIn({ redirectUrl: pathname })}>
        Logg inn med SSO
      </Button>
    </div>
  )
}
