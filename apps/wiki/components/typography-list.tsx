import { TypographyItemType } from "@/types/types";
import { TypographyListItem } from "./typography-list-item";

type TypographyListProps = {
  items: TypographyItemType[];
};

export function TypographyList({ items }: TypographyListProps) {
  return (
    <div className="grid gap-10">
      {items.map((item, index) => (
        <TypographyListItem key={index} typography={item} />
      ))}
    </div>
  );
}
