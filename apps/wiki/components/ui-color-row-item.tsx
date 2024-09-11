import { UiFargerProps } from "@/app/(routes)/merkevare/farger/_components/ui-farger"
import { CheckCircle } from "lucide-react"

type UiColorRowItemProps = {
	color: UiFargerProps
}

export function UiColorRowItem({ color: { color } }: UiColorRowItemProps) {
	const { boxes, shades, title } = color

	return (
		<div className="grid gap-[24.38px]">
			<h4 className="text-[24.38px] leading-[34.13px] text-[#3B060A]">{title}</h4>
			<div className="grid">
				<div className="grid grid-cols-5 rounded-t-[16px] overflow-hidden  h-[150px]">
					<div className="bg-green-100" />
					<div className="bg-green-300" />
					<div className="bg-green-500" />
					<div className="bg-green-700" />
					<div className="bg-green-900" />
				</div>
				<div className="grid grid-cols-5 bg-[#FDF9F9] rounded-b-[16px] h-[63.97px]">
					<div className="grid gap-[5.48px] py-[14.62px] px-4 h-full">
						<p className="text-[12.19px] leading-[18.28px]">Sukess 75</p>
						<p className="text-[12.19px] leading-[18.28px]">#CBFBDB</p>
					</div>
					<div className="grid gap-[5.48px] py-[14.62px] px-4 h-full">
						<p className="text-[12.19px] leading-[18.28px]">Sukess 75</p>
						<p className="text-[12.19px] leading-[18.28px]">#CBFBDB</p>
					</div>
					<div className="grid gap-[5.48px] py-[14.62px] px-4 h-full">
						<p className="text-[12.19px] leading-[18.28px]">Sukess 75</p>
						<p className="text-[12.19px] leading-[18.28px]">#CBFBDB</p>
					</div>
					<div className="grid gap-[5.48px] py-[14.62px] px-4 h-full">
						<p className="text-[12.19px] leading-[18.28px]">Sukess 75</p>
						<p className="text-[12.19px] leading-[18.28px]">#CBFBDB</p>
					</div>
					<div className="grid gap-[5.48px] py-[14.62px] px-4 h-full">
						<p className="text-[12.19px] leading-[18.28px]">Sukess 75</p>
						<p className="text-[12.19px] leading-[18.28px]">#CBFBDB</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-[16.25px]">
				<div className="w-[225.32px] h-[206.54px] bg-green-200 rounded-[12.02px] p-6 flex justify-between flex-col">
					<p className="text-[18.03px] leading-[25.24px] line-clamp-2">Suksess 700 på Sukess 75</p>
					<div className="grid space-y-1">
						<span className="leading-[18.93px] text-[18.03px] flex items-center">
							<CheckCircle className="size-4 mr-1.5 fill-green-400" />
							8.51
						</span>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AA</p>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AAA</p>
					</div>
				</div>
				<div className="w-[225.32px] h-[206.54px] bg-[#FDF9F9] rounded-[12.02px] p-6 flex justify-between flex-col">
					<p className="text-[18.03px] leading-[25.24px] line-clamp-2">Suksess 700 på Sukess 75</p>
					<div className="grid space-y-1">
						<span className="leading-[18.93px] text-[18.03px] flex items-center">
							<CheckCircle className="size-4 mr-1.5 fill-green-400" />
							8.51
						</span>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AA</p>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AAA</p>
					</div>
				</div>
				<div className="w-[225.32px] h-[206.54px] bg-[#330314] rounded-[12.02px] p-6 flex justify-between flex-col">
					<p className="text-[18.03px] leading-[25.24px] line-clamp-2">Suksess 700 på Sukess 75</p>
					<div className="grid space-y-1">
						<span className="leading-[18.93px] text-[18.03px] flex items-center">
							<CheckCircle className="size-4 mr-1.5 fill-green-400" />
							8.51
						</span>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AA</p>
						<p className="text-[18.03px] leading-[27.04px]">Normal tekst AAA</p>
					</div>
				</div>
			</div>
		</div>
	)
}
