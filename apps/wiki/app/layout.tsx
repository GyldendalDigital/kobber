import type { Metadata } from "next"
import "@/styles/globals.css"
import { SessionProvider } from "next-auth/react"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { IconLoader } from "@/components/kobber-icons-loader"
import { WikiNavbar } from "@/components/menu/wiki-navbar"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="no"
      className={`${mori.className} ${mori.variable} ${lyon.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className={cn("bg-[#FDF9F9] text-[#481125ff] antialiased transition-all")}>
        <SessionProvider>
          <IconLoader />
          <div className="mx-auto flex min-h-screen w-full max-w-max-width flex-col gap-y-page/gap/horizontal px-page/padding/inline/xsmall sm:px-page/padding/inline/small md:px-page/padding/inline/medium xl:px-page/padding/inline/large">
            <WikiNavbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
