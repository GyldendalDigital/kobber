"use client"

import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react"
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
        color-theme="brand"
        color-level={cta ? "primary" : "secondary"}
        color-variant="main"
        onClick={status === "unauthenticated" ? handleLogin : handleLogout}
      >
        <Login className={styles["icon"]} slot="icon" />
        {loginText + textSuffix}
      </KobberButton>
    </div>
  )
}
