import { TypographyItemType } from "@/types/types"
import { FontName } from "@/app/fonts"

type TypographyListItemProps = {
  typography: TypographyItemType
  fontClassName: FontName
}

export function TypographyListItem({ typography, fontClassName }: TypographyListItemProps) {
  return (
    <div className="rounded-16 flex w-full flex-row items-center gap-x-main/gap/vertical py-4">
      <div className="text-[#A35E70 grid w-[116px] gap-[8px] text-[12px]">
        <span>Weight: {typography.weight}</span>
        <span>
          Size: {typography.rem.toLocaleString("no-NO")}rem / {typography.px}px
        </span>
        <span>Line height: {typography.lineHeight}px</span>
      </div>
      <span
        className={fontClassName}
        style={{
          fontSize: `${typography.rem}rem`,
          lineHeight: `${typography.lineHeight}px`,
          fontWeight: getFontWeight(typography.weight),
        }}
      >
        {typography.display}
      </span>
    </div>
  )
}

const getFontWeight = (weight: string) => {
  switch (weight) {
    case "Regular":
      return 400
    case "Bold":
      return 700
    case "Light":
      return 300
    case "Book":
      return 300
    case "Semi Bold":
      return 600
    default:
      return 400
  }
}
