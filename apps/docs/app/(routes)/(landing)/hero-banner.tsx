import Image from "next/image"
import { KobberHeading, KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"

export function HeroBanner() {
  const src = damUrl("FO4HFrU94yn8e_pN7iIqOf", ".svg")
  const alt = "Gyldendal Art"
  return (
    <header
      className={
        "flex flex-col items-center justify-between gap-[32px] overflow-hidden rounded-[24px] bg-[#F9EAED] px-page/padding/inline/xsmall py-[32px] md:grid md:w-full md:grid-cols-[1fr_351px] md:p-page/padding/inline/large"
      }
    >
      <Image src={src} width={188} height={184} alt={alt} className="block md:hidden" />

      <KobberTextWrapper>
        <KobberHeading>
          Velkommen til Kobber
          <KobberHeading level="div" font="secondary">
            <em>Gyldendals designsystem</em>
          </KobberHeading>
        </KobberHeading>
        <p>Design, bygg, og skap gode løsninger med Gyldendals designsystem.</p>
      </KobberTextWrapper>

      <Image src={src} width={351} height={343} alt={alt} className="hidden md:block" />
    </header>
  )
}
