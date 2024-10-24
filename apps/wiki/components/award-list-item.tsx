import Link from "next/link"
import { AwardType } from "@/types/types"

type AwardListItemProps = {
  award: AwardType
}

export function AwardListItem({ award }: AwardListItemProps) {
  return (
    <Link href={"/"}>
      <div className="grid h-40 grid-cols-5 border-b-[1px] border-[#E5CFD3] py-8">
        <span className="line-clamp-1 text-sm text-[#DC134F]">
          {award.date.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="col-span-4 line-clamp-1 text-sm text-[#481125ff]">{award.title}</span>
      </div>
    </Link>
  )
}
