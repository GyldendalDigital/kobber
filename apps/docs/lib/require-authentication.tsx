import { getCurrentUser } from "@/actions/auth-actions"
import { Restricted } from "../components/global/restricted"

type SessionProviderProps = {
  children: React.ReactNode
}

export async function RequireAuthentication({ children }: SessionProviderProps) {
  const { user } = await getCurrentUser()

  // if (!user) {
  //   return <Restricted />
  // }

  return <>{children}</>
}
