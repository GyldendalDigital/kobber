import { FeatureBoxType } from "@/types/types"
import Image from "next/image"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

type FeatureBoxProps = {
	item: FeatureBoxType
}

export function FeatureBox({ item }: FeatureBoxProps) {
	if (item.href) {
		return (
			<div className="w-full md:w-[270px] h-[220px] relative rounded-[14px] overflow-hidden bg-[#EAE0E1]">
				{item.image ? <Image src={item.image} fill alt="Image" className="object-cover" /> : null}
				<Link href={item.href} className={cn(buttonVariants({ className: "absolute left-[10px] top-[166px]" }))}>
					{item.title}
				</Link>
			</div>
		)
	}

	return (
		<div className="w-full md:w-[270px] h-[220px] relative rounded-[14px] overflow-hidden bg-[#EAE0E1]">
			{item.image ? <Image src={item.image} fill alt="Image" className="object-cover" /> : null}
			<Button className="absolute left-[10px] top-[166px]">{item.title}</Button>
		</div>
	)
}
