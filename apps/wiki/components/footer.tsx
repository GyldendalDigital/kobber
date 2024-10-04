import { LogoSVG } from "./svg";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-start h-96 px-main">
      <div className="relative h-32 w-120 ">
        <LogoSVG />
      </div>
    </div>
  );
}
