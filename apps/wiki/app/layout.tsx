import type { Metadata } from "next"
import "@/styles/globals.css"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { KobberIconLoader, KobberThemeContext } from "@/components/kobber-ssr-loader"
import { WikiNavbar } from "@/components/menu/wiki-navbar"

/** Fallback for all pages */
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description:
    "Byggesteiner Gyldendal bruker til å lage solide, sammenhengende og universelt tilgjengelige produkter.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "kobber-theme-default bg-aubergine-25 text-text/color/primary/body antialiased transition-all"
        )}
      >
        <KobberThemeContext themeId="kobber-theme-default">
          <KobberIconLoader />
          <div className="gap-y-page/gap/horizontal/small px-page/padding/inline/xsmall md:px-page/padding/inline/large mx-auto flex min-h-screen flex-col justify-between">
            <WikiNavbar />
            {children}
            <Footer />
          </div>
        </KobberThemeContext>
      </body>
    </html>
  )
}
