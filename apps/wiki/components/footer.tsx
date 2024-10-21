import { LogoSVG } from "./svg"

export default function Footer() {
  return (
    <div className="h-[168px] w-full px-main md:px-0">
      <div className="mx-auto flex w-full max-w-max-width flex-col items-center gap-16 md:flex-row md:justify-between">
        <div className="relative h-32 w-120">
          <LogoSVG />
        </div>
        <span className="text-[12px] text-wine-525">{new Date().getFullYear()} Gyldendal AS</span>
      </div>
    </div>
  )
}
