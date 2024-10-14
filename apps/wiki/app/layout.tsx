import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { KobberThemeContext } from "@/components/kobber-ssr-loader";
import { TopMenu } from "@/components/menu/top-menu";
import { APP_NAME } from "@/lib/constants";
import Footer from "@/components/footer";

/** Fallback for all pages */
export const metadata: Metadata = {
  title: `${APP_NAME} - Gyldendals designsystem`,
  description:
    "Byggesteiner Gyldendal bruker til å lage solide, sammenhengende og universelt tilgjengelige produkter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "kobber-theme-default bg-aubergine-25    antialiased transition-all ",
        )}
      >
        <KobberThemeContext themeId="kobber-theme-default">
          <div className="min-h-screen flex flex-col gap-[48px] justify-between  mx-auto px-main md:px-0">
            <TopMenu />
            {children}
            <Footer />
          </div>
        </KobberThemeContext>
      </body>
    </html>
  );
}
