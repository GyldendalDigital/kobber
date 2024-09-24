import { FeatureBoxType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { KobberButton } from "@/components/kobber-ssr-loader";

type FeatureBoxGridItemProps = {
  item: FeatureBoxType;
};

export function FeatureBoxGridItem({ item }: FeatureBoxGridItemProps) {
  return (
    <Link
      href={item.href ?? "#"}
      className="bg-[#EAE0E1] rounded-14 overflow-hidden flex p-12 justify-start items-end relative hover:scale-105 transition"
    >
      {/* TODO: switch with label component when it's ready */}
      <KobberButton
        level="primary"
        variant="supplemental alt"
        color="aubergine"
        disabled
        style={{ zIndex: 1, pointerEvents: "none" }}
      >
        {item.title}
      </KobberButton>
      {item.image ? <Image src={item.image} fill alt="" className="object-cover absolute" /> : null}
    </Link>
  );
}
