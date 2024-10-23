import { LogoSVG } from "./svg"

export default function Footer() {
  return (
    <div className="min-h-[206px] w-full">
      <div className="mx-auto flex w-full flex-col items-center gap-[8px] pb-[60px] pt-[72px] md:flex-row md:justify-between md:pt-[108px]">
        <LogoSVG width={131} height={38} />
        <span className="text-wine-525 text-center text-[12px]">
          {new Date().getFullYear()} Gyldendal AS
        </span>
      </div>
    </div>
  )
}
