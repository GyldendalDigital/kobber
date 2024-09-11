import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { TopBar } from "@/components/top-bar"

const PPMori = localFont({
	src: [
		{ path: "../../assets/PPMori/PPMori-Light.woff2", style: "normal", weight: "300" },
		{ path: "../../assets/PPMori/PPMori-Regular.woff2", style: "normal", weight: "400" },
		{ path: "../../assets/PPMori/PPMori-Medium.woff2", style: "normal", weight: "500" },
		{ path: "../../assets/PPMori/PPMori-SemiBold.woff2", style: "normal", weight: "500" },
		{ path: "../../assets/PPMori/PPMori-Bold.woff2", style: "normal", weight: "800" },
		{ path: "../../assets/PPMori/PPMori-ExtraBold.woff2", style: "normal", weight: "900" },
		{ path: "../../assets/PPMori/PPMori-RegularItalic.woff2", style: "italic", weight: "400" },
		{ path: "../../assets/PPMori/PPMori-BoldItalic.woff2", style: "italic", weight: "700" },
	],
})

export const metadata: Metadata = {
	title: "Kobber Wiki",
	description: "Kobber WIKI",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("bg-white min-h-screen h-full size-full antialiased transition-all", PPMori.className)}>
				<div className=" flex flex-col items-center w-full md:w-[1280px] mx-auto h-full">
					<div className="w-full md:w-[1148px] h-full flex flex-col gap-y-8">
						<TopBar />
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
