import { FeatureBoxType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type FeatureBoxGridItemProps = {
  item: FeatureBoxType;
};

export function FeatureBoxGridItem({ item }: FeatureBoxGridItemProps) {
  return (
    <Link href={item.href ?? "#"}>
      {/* TODO: switch with label component when it's ready */}
      <div className="bg-[#EAE0E1] rounded-14 overflow-hidden flex p-12 justify-start items-end relative hover:scale-105 transition h-full">
        <label className="rounded-8 p-8 h-[41px] w-[200px] line-clamp-1 bg-aubergine-25 z-10 text-aubergine-850 text-[16px] flex items-center">
          {item.title}
        </label>
        {item.image ? (
          <Image
            src={item.image}
            fill
            alt=""
            className="object-cover absolute"
          />
        ) : null}
      </div>
    </Link>
  );
}
