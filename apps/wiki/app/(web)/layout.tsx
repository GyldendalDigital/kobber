import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { KobberThemeContext } from "@/components/kobber-ssr-loader";
import { TopMenu } from "@/components/menu/top-menu";

// Moved to global.css
// const PPMori = localFont({
//   src: [
//     { path: "../../assets/PPMori/PPMori-Light.woff2", style: "normal", weight: "300" },
//     { path: "../../assets/PPMori/PPMori-Regular.woff2", style: "normal", weight: "400" },
//     { path: "../../assets/PPMori/PPMori-Medium.woff2", style: "normal", weight: "500" },
//     { path: "../../assets/PPMori/PPMori-SemiBold.woff2", style: "normal", weight: "500" },
//     { path: "../../assets/PPMori/PPMori-Bold.woff2", style: "normal", weight: "800" },
//     { path: "../../assets/PPMori/PPMori-ExtraBold.woff2", style: "normal", weight: "900" },
//     { path: "../../assets/PPMori/PPMori-RegularItalic.woff2", style: "italic", weight: "400" },
//     { path: "../../assets/PPMori/PPMori-BoldItalic.woff2", style: "italic", weight: "700" },
//   ],
// });

export const metadata: Metadata = {
  title: "Kobber - Gyldendals designsystem",
  description: "Byggesteiner Gyldendal bruker til å lage solide, sammenhengende og universelt tilgjengelige produkter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("kobber-theme-default bg-aubergine-25 min-h-screen  size-full antialiased transition-all")}>
        <KobberThemeContext themeId="kobber-theme-default">
          <div className="max-w-max-width min-w-min-width mx-auto ">
            <TopMenu />
            {children}
          </div>
        </KobberThemeContext>
      </body>
    </html>
  );
}
