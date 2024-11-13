import Image from "next/image"
import { damImageUrl } from "@/lib/damImageLoader"
import { cn } from "@/lib/utils"

export function HeroBanner() {
  const src = damImageUrl("FO4HFrU94yn8e_pN7iIqOf", ".svg")
  const alt = "Gyldendal Art"
  return (
    <header
      className={cn(
        "overflow-hidden rounded-[24px] bg-[#F9EAED] px-[16px] py-[32px] md:w-full md:p-[64px]"
      )}
    >
      <div className="flex flex-col items-center justify-between gap-[32px] md:grid md:grid-cols-[1fr_351px]">
        <Image src={src} width={188} height={184} alt={alt} className="block md:hidden" />

        <div className="flex w-full flex-col items-center gap-y-[24px] md:items-start">
          <div className="grid w-full gap-[16px] text-center md:gap-[8px] md:text-left">
            <h1 className="text[#481125] text-[20px] md:text-[48px] md:text-text/primary/size/display/small">
              Velkommen til Kobber
            </h1>
            <h2 className="text-[32px] font-medium text-[#DC134F] md:text-[48px]">
              Gyldendals designsystem
            </h2>
          </div>
          <p className="max-w-[390px] text-center text-[16px] text-[#481125] md:text-left md:text-[20px]">
            Design, bygg, og skap gode løsninger med Gyldendals designsystem.
          </p>
        </div>

        <Image src={src} width={351} height={343} alt={alt} className="hidden md:block" />
      </div>
    </header>
  )
}
