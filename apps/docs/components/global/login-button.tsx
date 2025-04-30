"use client"

import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Login } from "@gyldendal/kobber-icons/react-ssr-safe"
import { signOut, useSession } from "next-auth/react"
import { ssoSignIn } from "@/lib/use-sso-sign-in"
import styles from "./login-button.module.css"

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
    <div className={styles["wrapper"]}>
      <KobberButton
        fullWidth
        variant={cta ? "brand-primary-main" : "brand-secondary-main"}
        icon={<Login className={styles["icon"]} />}
        onClick={status === "unauthenticated" ? handleLogin : handleLogout}
      >
        {loginText + textSuffix}
      </KobberButton>
    </div>
  )
}
