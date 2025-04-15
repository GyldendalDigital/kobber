import type { Metadata } from "next"
import "@/styles/globals.css"
import { cookies } from "next/headers"
import { SessionProvider as AuthProvider } from "next-auth/react"
import { APP_NAME } from "@/lib/constants"
import { RequireAuthentication } from "@/lib/require-authentication"
import Footer from "@/components/footer"
import { IconLoader } from "@/components/kobber-icons-loader"
import { inter, lyon, mori } from "../fonts"

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
  return (
    <html
      lang="no"
      className={`${mori.className} ${mori.variable} ${lyon.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className={kobberTheme}>
        <AuthProvider>
          <IconLoader />
          <RequireAuthentication>{children}</RequireAuthentication>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
