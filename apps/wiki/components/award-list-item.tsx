import { AwardType } from "@/types/types";
import Link from "next/link";

type AwardListItemProps = {
  award: AwardType;
};

export function AwardListItem({ award }: AwardListItemProps) {
  return (
    <Link href={"/"}>
      <div className="h-40 border-b-[1px] border-wine-150 py-8 grid grid-cols-5">
        <span className="text-carmine-525 text-sm line-clamp-1">
          {award.date.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="text-sm text-text/color/primary/body line-clamp-1 col-span-4">{award.title}</span>
      </div>
    </Link>
  );
}
