import { FeatureBoxType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { KobberButton } from "@/components/kobber-ssr-loader";

type FeatureBoxGridItemProps = {
  item: FeatureBoxType;
};

export function FeatureBoxGridItem({ item }: FeatureBoxGridItemProps) {
  return (
    <div className="bg-[#EAE0E1] rounded-14 overflow-hidden flex p-12 justify-start items-end relative">
      {item.image ? <Image src={item.image} fill alt="Image" className="object-cover" /> : null}
      {item.href ? (
        <Link href={item.href}>
          <KobberButton level="primary" variant="supplemental alt" color="aubergine">
            {item.title}
          </KobberButton>
        </Link>
      ) : (
        // <Link href={item.href} className={cn(buttonVariants({}))}>
        //   {item.title}
        // </Link>
        <KobberButton level="primary" variant="supplemental alt" color="aubergine">
          {item.title}
        </KobberButton>
        //  <Button>{item.title}</Button>
      )}
    </div>
  );
}
