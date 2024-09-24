import { NewsType } from "@/types/types";
import Link from "next/link";

type AwardListItemProps = {
  award: NewsType;
};

export function AwardListItem({ award }: AwardListItemProps) {
  return (
    <Link href={"/"}>
      <div className="h-40 border-b-[1px] border-wine-150 py-8 flex items-center gap-60">
        <span className="text-carmine-525 text-sm line-clamp-1">{award.date.toDateString()}</span>
        <span className="text-sm text-text/color/primary/body line-clamp-1">{award.title}</span>
      </div>
    </Link>
  );
}
