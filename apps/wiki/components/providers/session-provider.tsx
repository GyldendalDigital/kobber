import { getCurrentUser } from "@/actions/auth-actions"

type SessionProviderProps = {
  children: React.ReactNode
}

export async function SessionProvider({ children }: SessionProviderProps) {
  const { user } = await getCurrentUser()

  if (!user) {
    return <div>Vennligst logg inn her</div>
  }

  return <>{children}</>
}
