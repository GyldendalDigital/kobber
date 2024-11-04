import { getCurrentUser } from "@/actions/auth-actions"
import { Restricted } from "../global/restricted"

type SessionProviderProps = {
  children: React.ReactNode
}

export async function SessionProvider({ children }: SessionProviderProps) {
  const { user } = await getCurrentUser()

  if (!user) {
    return <Restricted />
  }

  return <>{children}</>
}
