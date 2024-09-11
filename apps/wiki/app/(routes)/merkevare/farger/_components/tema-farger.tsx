import { ColorRowItem } from "@/components/color-row-item"

export type ThemeColorProps = {
	title: string
	color1Name: string
	color1Hex: string
	color2Name: string
	color2Hex: string
	color3Name: string
	color3Hex: string
}

const ThemeColors: ThemeColorProps[] = [
	{
		title: "Spenning",
		color1Name: "Krim 250",
		color1Hex: "#aec3c3",
		color2Name: "Krim 850",
		color2Hex: "#0B2E3A",
		color3Hex: "#081E27",
		color3Name: "Krim 900",
	},
	{
		title: "Fantasy",
		color1Hex: "#C1B9C4",
		color1Name: "Fantasy 250",
		color2Hex: "#3F3643",
		color2Name: "Fantasy 750",
		color3Hex: "#28222a",
		color3Name: "Fantasy 850",
	},
	{
		title: "Natur",
		color1Name: "Natur 50",
		color1Hex: "#D9E7D5",
		color2Hex: "#6c7868",
		color2Name: "Natur 525",
		color3Hex: "#343A32",
		color3Name: "Natur 750",
	},
	{
		title: "Nostalgi",
		color1Hex: "#fdf9f6",
		color1Name: "Nostalgi 25",
		color2Hex: "#705B4A",
		color2Name: "Nostalgi 600",
		color3Hex: "#5C4838",
		color3Name: "Nostalgi 850",
	},
	{
		title: "Ferie",
		color1Name: "Sun 50",
		color1Hex: "#faebe6",
		color2Hex: "#705a56",
		color2Name: "Sun 600",
		color3Hex: "#B02C13",
		color3Name: "Sun 600",
	},
	{
		title: "Romanse",
		color1Hex: "#f9eaec",
		color1Name: "Aubergine 50",
		color2Hex: "#8b2241",
		color2Name: "Aubergine 675",
		color3Hex: "#6a1830",
		color3Name: "Aubergine 750",
	},
]

export function TemaFarger() {
	return (
		<>
			<div className="grid gap-[12px]">
				<h2 className="text-[#532D37] text-[32px] leading-[38.4px]">Temafarger</h2>
				<p className="text-[#532D37] text-[16px] leading-[24px]">
					Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en
					kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å
					kategorisere produkt-spesifikt innhold.
				</p>
			</div>

			<div className="grid gap-[48px]">
				{/* COLORS */}
				<div className="grid gap-[80px] ">
					<div className="grid grid-cols-2 gap-[24.38px]">
						{ThemeColors.map((color, index) => (
							<ColorRowItem key={index} color={color} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
