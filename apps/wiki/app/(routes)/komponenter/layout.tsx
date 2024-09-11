import { SideBar } from "@/components/side-bar"
import { LogoSVG } from "@/components/svg"
import { ComponentsRoutesData } from "@/data/routes-data"

type ComponentsLayoutProps = {
	children: React.ReactNode
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
	return (
		<div className="grid grid-cols-[270px_1fr] overflow-hidden gap-5">
			<div className="w-full md:w-[270px] rounded-[8px] space-y-96 ">
				<SideBar routes={ComponentsRoutesData} />
				<LogoSVG />
			</div>
			<div className="w-full pb-20">{children}</div>
		</div>
	)
}
