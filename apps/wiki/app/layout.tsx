import type { Metadata } from "next"
import "@/styles/globals.css"
import { SessionProvider } from "next-auth/react"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { IconLoader } from "@/components/kobber-icons-loader"
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
    <html lang="no" suppressHydrationWarning>
      <body className={cn("bg-[#FDF9F9] text-[#481125ff] antialiased transition-all")}>
        <SessionProvider>
          <IconLoader />
          <div className="sm:px-page/padding/inline/small md:px-page/padding/inline/medium mx-auto flex min-h-screen w-full max-w-max-width flex-col gap-y-page/gap/horizontal px-page/padding/inline/xsmall xl:px-page/padding/inline/large">
            <WikiNavbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
