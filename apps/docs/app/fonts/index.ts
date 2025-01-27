import localFont from "next/font/local"

/**
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */

export const mori = localFont({
  src: [
    {
      path: "./PPMori-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PPMori-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mori",
})

export const lyon = localFont({
  src: [
    {
      path: "./LyonDisplay-Light-Web-2.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./LyonDisplay-Regular-Web-2.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-lyon",
})

export const inter = localFont({
  src: "./InterVariable.ttf",
  display: "swap",
  variable: "--font-inter",
})

export type FontName = "font-mori" | "font-lyon" | "font-inter"
