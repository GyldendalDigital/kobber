import type { Metadata } from "next"
import "@/styles/globals.css"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { ThemeContext } from "@/components/kobber-components"
import { KobberIconLoader } from "@/components/kobber-ssr-loader"
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
      <body className={cn("bg-[#FDF9F9] text-[#481125ff] antialiased transition-all")}>
        <ThemeContext themeId="kobber-theme-default">
          <KobberIconLoader />
          <div className="mx-auto flex min-h-screen w-full max-w-max-width flex-col gap-y-page/gap/horizontal/small px-page/padding/inline/xsmall md:px-page/padding/inline/large">
            <WikiNavbar />
            {children}
            <Footer />
          </div>
        </ThemeContext>
      </body>
    </html>
  )
}
