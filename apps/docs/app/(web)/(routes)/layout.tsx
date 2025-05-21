import { SanityLive } from "@/sanity/lib/live"
import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import { NavBar } from "@/components/navigation/nav-bar/nav-bar"

globalThis.HTMLElement ??= HTMLElement

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
      <SanityLive />
    </>
  )
}
