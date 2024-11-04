"use client"

import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { TextCollection } from "../text-collection"

export function Restricted() {
  const pathname = usePathname()

  return (
    <div className="flex h-[60vh] w-full flex-col items-start justify-center gap-content/gap/horizontal">
      <TextCollection
        heading="Merkevare"
        ingress="Gyldendals merkevare består av kjernehistorien om Gyldendal, et felles verdigrunnlag, posisjonsbeskrivelse og et sett med felles designprinsipper. Her finnes også retningslinjer for vår merkevarearkitektur, samt retningslinjer for logo, farger, typografi, ikoner og layout. "
      />
      <KobberButton onClick={() => ssoSignIn({ redirectUrl: pathname })}>
        Logg inn med SSO
      </KobberButton>
    </div>
  )
}
