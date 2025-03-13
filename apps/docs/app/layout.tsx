import type { Metadata } from "next"
import "@/styles/globals.css"
import { cookies, draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"
import { SessionProvider as AuthProvider } from "next-auth/react"
import { VisualEditing } from "next-sanity"
import { APP_NAME } from "@/lib/constants"
import { RequireAuthentication } from "@/lib/require-authentication"
import { DisableDraftMode } from "@/components/DisableDraftMode"
import Footer from "@/components/footer"
import { IconLoader } from "@/components/kobber-icons-loader"
import { TopNav } from "@/components/navigation/top-nav"
import { inter, lyon, mori } from "./fonts"

/** Fallback for all pages */
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description:
    "Byggesteiner Gyldendal bruker til å lage solide, sammenhengende og universelt tilgjengelige produkter.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const mode = cookieStore.get("color-scheme")?.value || "default"
  const kobberTheme = `kobber-theme-${mode}`
  // const draft = await draftMode()
  // draft.enable()
  // console.log((await draftMode()).isEnabled)
  return (
    <html
      lang="no"
      className={`${mori.className} ${mori.variable} ${lyon.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className={kobberTheme}>
        {/* {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )} */}
        <AuthProvider>
          <IconLoader />
          <TopNav />
          <RequireAuthentication>{children}</RequireAuthentication>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
