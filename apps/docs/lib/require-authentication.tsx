import { getCurrentUser } from "@/actions/auth-actions"
import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import { Restricted } from "../components/global/restricted"

globalThis.HTMLElement ??= HTMLElement

type SessionProviderProps = {
  children: React.ReactNode
}

export async function RequireAuthentication({ children }: SessionProviderProps) {
  const { user } = await getCurrentUser()

  if (!user) {
    return <Restricted />
  }

  return <>{children}</>
}
