import Image, { StaticImageData } from "next/image";

type ContentPageProps = {
  image: StaticImageData;
};

export function ContentPane({ image }: ContentPageProps) {
  return (
    <div className="w-full h-full md:h-[491px]  rounded-none  gap-[8px]  flex items-center justify-center bg-[#F9EAED] py-[32px] px-[16px]  md:py-[74px] md:px-[64px]">
      <div className="w-full h-full flex-col flex md:flex-row items-center gap-[72px] md:gap-[182px]">
        <div className="w-[275px] h-[270px] relative mx-auto block md:hidden">
          <Image src={image} alt="Bilde" fill />
        </div>
        <div className="w-full md:w-[507px] flex flex-col gap-5 md:gap-10">
          <div className="grid gap-[4px] md:gap-[8px]">
            <h1 className="text-[28px] md:text-[42px] text-aubergine-850">
              Velkommen til Kobber
              <br />
            </h1>
            <h1 className="text-[28px] md:text-[42px] text-karmin-525">Gyldendals designsystem</h1>
          </div>
          <div className="w-[30ch] h-[68px]">
            <span className="text-aubergine-850 text-[15px] leading-normal">
              Design, bygg og skap gode og helhetlige løsninger med Gyldendals designsystem.
            </span>
          </div>
        </div>
        <div className="w-[275px] h-[270px] relative hidden md:grid">
          <Image src={image} alt="Bilde" fill />
        </div>
      </div>
    </div>
  );
}
