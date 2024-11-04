import { signIn } from "next-auth/react"

export const ssoSignIn = ({ redirectUrl }: { redirectUrl?: string }) => {
  signIn("microsoft-entra-id", {
    redirect: redirectUrl ? true : false,
    redirectTo: redirectUrl,
  })
}
