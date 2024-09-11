"use client"
import { mainRoutes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { isOnPath } from "@/utils/is-on-path"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function TopBar() {
	const pathName = usePathname()

	return (
		<div className="w-full h-[94px] sticky bg-white/80 backdrop-blur-sm top-0 z-50 ">
			<div className="mt-[45px]  mx-auto h-[34px] top-[45px]  flex items-center justify-between">
				<Link href="/" className="text-[32px] font-medium text-[#532D37]">
					Kobber
				</Link>

				<ul className="flex text-[#532D37]  items-center gap-[24px]">
					{mainRoutes.map((route, index) => (
						<li key={index}>
							<Link
								className={cn("text-16 leading-[16px] hover:underline", {
									underline: isOnPath(pathName, route.href),
								})}
								href={route.href}
							>
								{route.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
