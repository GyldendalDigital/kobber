import { InformationCardType } from "@/types/types";
import Image from "next/image";

const placeholderImg =
  "https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHNOGXw0IOuCwpAU2G5LuooDw7hr80JlQf4b9P9IFfWtk~raDTh4vKtoRU-~dqMnlKSCWGwkC-quZBvB-62X1AehdA5onllOcKqs5rzZbc1PgWHRMaH8SzH163B39~ZwYWQgXCaVV1E-KD~51~~TyPgXOx37eaYdV8u3umXFw2zUwugJIt6IQcG06dwifxnJnqcUL~TF6o1fTE-e5fUy9lojqhz0w-zaxRYPlNFjSn8dEAWP~vHDLlLbQzRRqffcL5LS6ZyJDdM-3Tyc7r6wjQzlikG7lL34tiJ7BMdWphToCgc~oYd8bjFqw7fost6Ya4EJTG51gfGh0UJf1Rfs1A__";

type InformationCardProps = {
  item: InformationCardType;
};

export function InformationCard({
  item: { title, text },
}: InformationCardProps) {
  return (
    <div className="w-full min-h-[375px] grid gap-24 items-center justify-center">
      <div className="size-[274px] relative rounded-16 overflow-hidden">
        <Image
          src={placeholderImg}
          alt="Bilde"
          fill
          className="object-cover rounded-16"
        />
      </div>

      <div className="min-h-[120px] flex flex-col items-start justify-start gap-16">
        <h6 className="text-[22px] text-text/color/primary/title-s">{title}</h6>
        {text && (
          <p className="whitespace-pre-line text-wine-525 text-[16px]">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
