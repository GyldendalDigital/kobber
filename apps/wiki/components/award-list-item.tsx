import { NewsType } from "@/types/types";

type AwardListItemProps = {
  award: NewsType;
};

export function AwardListItem({ award }: AwardListItemProps) {
  return (
    <div className="h-[41px] border-b-[1px] py-[8px] flex items-center gap-[62px]">
      <span className="text-carmine-525 text-sm line-clamp-1">{award.date.toDateString()}</span>
      <span className="text-sm text-aubergine-850 line-clamp-1">{award.title}</span>
    </div>
  );
}
