import Image from "next/image"
import { placeholderImageUrl } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-12">
      <Image
        src={placeholderImageUrl({ textRows: ["placeholder", "404"] })}
        alt=""
        width="600"
        height="400"
        className="rounded-2xl"
      />
      <h1>Ops! Vi fant ikke siden du leter etter</h1>
    </div>
  )
}
