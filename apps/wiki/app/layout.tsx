import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { KobberThemeContext } from "@/components/kobber-ssr-loader";
import { TopMenu } from "@/components/menu/top-menu";
import { APP_NAME } from "@/lib/constants";

/** Fallback for all pages */
export const metadata: Metadata = {
  title: `${APP_NAME} - Gyldendals designsystem`,
  description: "Byggesteiner Gyldendal bruker til å lage solide, sammenhengende og universelt tilgjengelige produkter.",
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
          "kobber-theme-default bg-aubergine-25 min-h-screen  size-full antialiased transition-all max-w-max-width mx-auto",
        )}
      >
        <KobberThemeContext themeId="kobber-theme-default">
          <TopMenu />
          {children}
        </KobberThemeContext>
      </body>
    </html>
  );
}
