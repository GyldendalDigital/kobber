"use client"

import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { signOut, useSession } from "next-auth/react"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { IconLogin } from "@/components/kobber-icons"

type Props = {
  cta?: boolean
  textSuffix?: string
}

export const LoginButton = (props: Props) => {
  const { cta, textSuffix = "" } = props
  const pathname = usePathname()
  const { status } = useSession()

  const handleLogout = () => {
    signOut()
  }

  const handleLogin = () => {
    ssoSignIn({ redirectUrl: pathname })
  }

  const loginText = status !== "authenticated" ? "Logg inn" : "Logg ut"

  return (
    <KobberButton
      variant={cta ? "brand-primary-main" : "brand-secondary-main"}
      icon={<IconLogin className="size-4" />}
      onClick={status === "unauthenticated" ? handleLogin : handleLogout}
    >
      {loginText + textSuffix}
    </KobberButton>
  )
}
