"use client"

import { Button } from "@/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { cn } from "@/lib/utils"
import { TemaFarger } from "./tema-farger"
import { UiFarger } from "./ui-farger"

export default function FargerWrapper() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()
	const section = searchParams.get("section")

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const handleSwitchSection = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	// Function to check if the current section matches the given section name
	const isCurrentSection = (sectionName: string) => section === sectionName

	return (
		<section className="w-full grid gap-[72px]">
			<div className="flex flex-col gap-[24px] -mt-[6px]">
				<h1 className="text-[#481125] text-[48px]">Farger</h1>
				<p className="text-[#532D37] leading-[33.6px] w-[711px] text-[24px]">
					Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt
					utvalg av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i
					daglig bruk av digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være
					lett å lage fargekombinasjoner som oppfyller kravene til universell utforming.
				</p>
				<div className="flex items-center gap-[8px]">
					<Button
						onClick={() => router.push(`${pathname}?${handleSwitchSection("section", "identitetsfarger")}`)}
						className={cn("", {
							"bg-[#E50143] hover:bg-[#E50143] text-white": !section || isCurrentSection("identitetsfarger"),
						})}
					>
						Identitetsfarger
					</Button>
					<Button
						onClick={() => router.push(`${pathname}?${handleSwitchSection("section", "temafarger")}`)}
						className={cn("", {
							"bg-[#E50143] hover:bg-[#E50143] text-white": isCurrentSection("temafarger"),
						})}
					>
						Temafarger
					</Button>
					<Button
						onClick={() => router.push(`${pathname}?${handleSwitchSection("section", "uifarger")}`)}
						className={cn("", {
							"bg-[#E50143] hover:bg-[#E50143] text-white": isCurrentSection("uifarger"),
						})}
					>
						UI-farger
					</Button>
				</div>
			</div>
			{!section || (section === "identitetsfarger" && <div>Identitetsfarger</div>)}
			{section === "temafarger" && <TemaFarger />}
			{section === "uifarger" && <UiFarger />}
		</section>
	)
}
