import { UiColorRowItem } from "@/components/ui-color-row-item"

export type UiFargerProps = {
	color: {
		title: string
		shades: {
			name: string
			hex: string
		}[]
		boxes: {
			title: string
			hex: string
			value: string
		}[]
	}
}

export const UiColors: UiFargerProps[] = [
	{
		color: {
			title: "Suksess",
			shades: [
				{
					name: "Sukess 75",
					hex: "#CBFBDB",
				},
				{
					name: "Sukess 125",
					hex: "#86FBBC",
				},
				{
					name: "Sukess 175",
					hex: "#5AE89F",
				},
				{
					name: "Sukess 450",
					hex: "#03834E",
				},
				{
					name: "Sukess 700",
					hex: "#014F2D",
				},
			],
			boxes: [
				{
					title: "Suksess 700 på Sukess 75",
					hex: "#CBFBDB",
					value: "8.51",
				},
				{
					title: "Suksess 700 på Sukess 125",
					hex: "#86FBBC",
					value: "8.51",
				},
				{
					title: "Suksess 700 på Sukess 175",
					hex: "#5AE89F",
					value: "8.51",
				},
			],
		},
	},
	{
		color: {
			title: "Informativ",
			shades: [
				{
					name: "Info 75",
					hex: "#CBFBDB",
				},
				{
					name: "Info 125",
					hex: "#86FBBC",
				},
				{
					name: "Info 175",
					hex: "#5AE89F",
				},
				{
					name: "Info 450",
					hex: "#03834E",
				},
				{
					name: "Info 700",
					hex: "#014F2D",
				},
			],
			boxes: [
				{
					title: "Suksess 700 på Info 75",
					hex: "#CBFBDB",
					value: "8.51",
				},
				{
					title: "Suksess 700 på Info 125",
					hex: "#86FBBC",
					value: "8.51",
				},
				{
					title: "Suksess 700 på Info 175",
					hex: "#5AE89F",
					value: "8.51",
				},
			],
		},
	},
]

export function UiFarger() {
	return (
		<div className="grid gap-[97.51px] w-[711px]">
			<div className="grid gap-[12.19px]">
				<h4 className="text-[#532D37] text-[32.5px] leading-[39px]">UI-farger</h4>
				<p className="text-[#532D37] leading-[24.38px] text-[16.25px]">
					Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til
					sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett.
				</p>
			</div>

			{UiColors.map((color, index) => (
				<UiColorRowItem key={index} color={color} />
			))}
		</div>
	)
}
