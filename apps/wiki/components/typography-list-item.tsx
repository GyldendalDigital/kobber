import { TypographyItemType } from "@/types/types"

type TypographyListItemProps = {
  typography: TypographyItemType
}

export function TypographyListItem({ typography }: TypographyListItemProps) {
  return (
    <div className="rounded-16 gap-x-main/gap/vertical flex w-full flex-row items-center py-4">
      <div className="text-[#A35E70 grid w-[116px] gap-[8px] text-[12px]">
        <span>Weight: {typography.weight}</span>
        <span>
          Size: {typography.rem.toLocaleString("no-NO")}rem / {typography.px}px
        </span>
        <span>Line height: {typography.lineHeight}px</span>
      </div>
      <span
        className="text-[#481125]"
        style={{
          fontSize: `${typography.rem}rem`,
          lineHeight: `${typography.lineHeight}px`,
          fontWeight: `${typography.weight.toLowerCase()}`,
        }}
      >
        {typography.display}
      </span>
    </div>
  )
}
