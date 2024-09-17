import { TypographyItemType } from "@/types/types";

type TypographyListItemProps = {
  typography: TypographyItemType;
};

export function TypographyListItem({ typography }: TypographyListItemProps) {
  return (
    <div className="rounded-[16px] w-full py-4 grid grid-cols-[fit-content(130px)_fit-content(150px)_1fr] gap-7 items-center">
      <span className="text-text/color/primary/title-m text-[28px]">{typography.name}</span>
      <div className="grid gap-[8px] text-text/color/primary/body ">
        <span>Weight: {typography.weight}</span>
        <span>
          Size: {typography.rem.toLocaleString("no-NO")}rem / {typography.px}px
        </span>
        <span>Line height: {typography.lineHeight}px</span>
      </div>
      <span className="text-text/color/primary/title-m text-[70px]">{typography.display}</span>
    </div>
  );
}
