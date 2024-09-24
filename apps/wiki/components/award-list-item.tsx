import { AwardType } from "@/types/types";
import Link from "next/link";

type AwardListItemProps = {
  award: AwardType;
};

export function AwardListItem({ award }: AwardListItemProps) {
  return (
    <Link href={"/"}>
      <div className="h-40 border-b-[1px] border-wine-150 py-8 flex items-center gap-64">
        <span className="text-carmine-525 text-primary-body line-clamp-1">{award.date.toDateString()}</span>
        <span className="text-primary-body text-text/color/primary/body line-clamp-1">{award.title}</span>
      </div>
    </Link>
  );
}
