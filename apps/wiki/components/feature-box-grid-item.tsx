import { FeatureBoxType } from "@/types/types";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type FeatureBoxGridItemProps = {
  item: FeatureBoxType;
};

export function FeatureBoxGridItem({ item }: FeatureBoxGridItemProps) {
  return (
    <div className="bg-[#EAE0E1] rounded-[14px] overflow-hidden flex p-4 justify-start items-end relative">
      {item.image ? <Image src={item.image} fill alt="Image" className="object-cover" /> : null}
      {item.href ? (
        <Link href={item.href} className={cn(buttonVariants({}))}>
          {item.title}
        </Link>
      ) : (
        <Button>{item.title}</Button>
      )}
    </div>
  );
}
