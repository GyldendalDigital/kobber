import { LogoSVG } from "./svg";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between h-[168px]  ">
      <div className="relative h-32 w-120 ">
        <LogoSVG />
      </div>
      <span className="text-[12px] text-wine-525">
        {new Date().getFullYear()} Gyldednal AS
      </span>
    </div>
  );
}
