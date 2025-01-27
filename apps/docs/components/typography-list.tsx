import { TypographyItemType } from "@/types/types";
import { TypographyListItem } from "./typography-list-item";
import { FontName } from "@/app/fonts";

type TypographyListProps = {
  items: TypographyItemType[];
  fontClassName: FontName;
};

export function TypographyList({ items, fontClassName }: TypographyListProps) {
  return (
    <div className="grid gap-10">
      {items.map((item, index) => (
        <TypographyListItem key={index} typography={item} fontClassName={fontClassName} />
      ))}
    </div>
  );
}
