import { LogoSVG } from "./svg";

export default function Footer() {
  return (
    <div className="w-full  h-[168px] px-main md:px-0 ">
      <div className="flex md:flex-row flex-col items-center md:justify-between max-w-max-width w-full mx-auto gap-16">
        <div className="relative h-32 w-120 ">
          <LogoSVG />
        </div>
        <span className="text-[12px] text-wine-525">
          {new Date().getFullYear()} Gyldednal AS
        </span>
      </div>
    </div>
  );
}
