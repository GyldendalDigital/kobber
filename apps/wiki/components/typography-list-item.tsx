import { TypographyItemType } from "@/types/types"

type TypographyListItemProps = {
  typography: TypographyItemType
}

export function TypographyListItem({ typography }: TypographyListItemProps) {
  return (
    <div className="flex w-full flex-row items-center gap-[24px] rounded-16 py-4">
      <div className="grid w-[116px] gap-[8px] text-[12px] text-wine-525">
        <span>Weight: {typography.weight}</span>
        <span>
          Size: {typography.rem.toLocaleString("no-NO")}rem / {typography.px}px
        </span>
        <span>Line height: {typography.lineHeight}px</span>
      </div>
      <span
        className="text-aubergine-850"
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
