import Image from "next/image"
import { cn } from "@/lib/utils"
import { BodyText } from "./body-text"
import { Heading } from "./heading"

type HeroBannerProps = {
  src: string
  alt?: string
  className?: string
  width: number
  height: number
}

export function HeroBanner({ src, alt, width, height, className }: HeroBannerProps) {
  return (
    <header
      className={cn(
        "mx-auto w-[95%] overflow-hidden rounded-[24px] bg-[#F9EAED] px-[16px] py-[32px] md:w-full md:p-[64px]",
        className
      )}
    >
      <div className="flex flex-col items-center justify-between gap-[32px] md:flex-row md:gap-[182px]">
        <Image
          src={"./hero-svg.svg"}
          width={width}
          height={height}
          alt="Gyldendal Art"
          className="block md:hidden"
        />

        <div className="flex flex-col gap-y-[24px]">
          <div className="grid gap-[16px] text-center md:gap-[8px] md:text-left">
            <h1 className="text[#481125] md:text-text/primary/size/display/small text-[20px] md:text-[48px]">
              Velkommen til kobber
            </h1>
            <h2 className="text-[32px] font-medium text-[#DC134F] md:text-[48px]">
              Gyldendals designssytem
            </h2>
          </div>
          <p className="text-center text-[16px] text-[#481125] md:text-left md:text-[20px]">
            Design, bygg, og skap gode løsninger med Gyldendals designsystem.
          </p>
        </div>

        {/* <div className="grid gap-[24px] text-center md:text-left">
          <Heading
            text="Velkommen til kobber"
            className="md:text-text/primary/size/display/small text-[20px]"
          >
            <h2 className="text-[32px] text-text/color/secondary/display-s md:text-[48px]">
              Gyldendals designsystem
            </h2>
          </Heading>
          <BodyText className="w-full text-center text-[16px] leading-[35px] text-text/color/primary/title-s md:max-w-[40ch] md:text-left md:text-[20px]">
            Design, bygg og skap gode og helhetlige løsninger med Gyldendals designsystem.
          </BodyText>
        </div> */}

        <Image src={src} width={351} height={343} alt={alt || "Alt"} className="hidden md:block" />
      </div>
    </header>
  )
}
