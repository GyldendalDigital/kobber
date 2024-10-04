import { placeholderImageUrl } from "@/lib/utils";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] w-full  flex flex-col items-center justify-center gap-12">
      <Image
        src={placeholderImageUrl({ textRows: ["placeholder", "404"] })}
        alt=""
        width="600"
        height="400"
        className="rounded-14"
      />
      <h1 className="text-primary-title-m">Ops! Vi fant ikke siden du leter etter</h1>
    </div>
  );
}
