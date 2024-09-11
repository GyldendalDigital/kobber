import { ThemeColorProps } from "@/app/(routes)/merkevare/farger/_components/tema-farger"
import { cn } from "@/lib/utils"

type ColorRowItemProps = {
	color: ThemeColorProps
}

export function ColorRowItem({
	color: { color1Hex, color1Name, color2Hex, color2Name, color3Hex, color3Name, title },
}: ColorRowItemProps) {
	return (
		<div className="grid gap-[16px] w-[341.9px] h-[273.53px]">
			<div className="text-[24.38px] leading-[34.13px] text-[#532D37] ">{title}</div>
			<div>
				<div className="rounded-t-[16px] overflow-hidden">
					<div className="rounded-t-lg grid grid-cols-3 h-[150px]">
						<div style={{ backgroundColor: color1Hex }} />
						<div style={{ backgroundColor: color2Hex }} />
						<div style={{ backgroundColor: color3Hex }} />
					</div>
				</div>
				<div className="rounded-b-[16px] bg-[#FDF9F9] h-[73.53px] ">
					<div className="grid grid-cols-3">
						<div className="p-[11.76px] grid gap-[4.41px] items-center">
							<p className="text-black text-[12px] leading-[18px]">{color1Name}</p>
							<p className="text-black text-[12px] leading-[18px]">{color1Hex}</p>
						</div>
						<div className="p-[11.76px] grid gap-[4.41px]">
							<p className="text-black text-[12px] leading-[18px]">{color2Name}</p>
							<p className="text-black text-[12px] leading-[18px]">{color2Hex}</p>
						</div>
						<div className="p-[11.76px] grid gap-[4.41px]">
							<p className="text-black text-[12px] leading-[18px]">{color3Name}</p>
							<p className="text-black text-[12px] leading-[18px]">{color3Hex}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
