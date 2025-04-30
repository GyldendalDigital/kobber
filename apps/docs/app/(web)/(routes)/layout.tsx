import { SanityLive } from "@/sanity/lib/live"
import { NavBar } from "@/components/navigation/nav-bar/nav-bar"

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
      <SanityLive />
    </>
  )
}
