import { FeatureBoxType } from "@/types/types"
import { FeatureBox } from "./feature-box"
import { cn } from "@/lib/utils"

type FeatureBoxGridProps = {
	items: FeatureBoxType[]
	className?: string
}

export function FeatureBoxGrid({ items, className }: FeatureBoxGridProps) {
	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] ", className)}>
			{items.map((item, index) => (
				<FeatureBox key={index} item={item} />
			))}
		</div>
	)
}
