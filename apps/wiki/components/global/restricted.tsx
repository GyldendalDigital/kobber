"use client"

import { usePathname } from "next/navigation"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { Button } from "../kobber-components"
import { TextCollection } from "../text-collection"

export function Restricted() {
  const pathname = usePathname()

  return (
    <div className="flex h-[60vh] w-full flex-col items-start justify-center gap-content/gap/horizontal">
      <TextCollection
        heading="Merkevare"
        ingress="Gyldendals merkevare består av kjernehistorien om Gyldendal, et felles verdigrunnlag, posisjonsbeskrivelse og et sett med felles designprinsipper. Her finnes også retningslinjer for vår merkevarearkitektur, samt retningslinjer for logo, farger, typografi, ikoner og layout. "
      />
      <Button variant="main" color="carmine" onClick={() => ssoSignIn({ redirectUrl: pathname })}>
        Logg inn med SSO
      </Button>
    </div>
  )
}
