import Image, { StaticImageData } from "next/image";

type ContentPageProps = {
  image: StaticImageData;
};

export function HeroBanner({ image }: ContentPageProps) {
  return (
    <div className="w-full h-full md:h-[491px]   gap-8  flex items-center justify-center bg-aubergine-50 px-main py-32 md:py-[74px]">
      <div className="w-full h-full flex-col flex md:flex-row items-center gap-y-[50px]">
        <div className="w-[275px] h-[270px] relative mx-auto block md:hidden">
          <Image src={image} alt="Bilde" fill className="object-contain" />
        </div>
        <div className="w-full md:max-w-[507px] flex flex-col gap-5 md:gap-10">
          <div className="grid gap-[4px] md:gap-8 text-primary-heading-s md:text-primary-heading-m">
            <h1 className=" text-text/color/primary/display-s">
              Velkommen til Kobber
              <br />
            </h1>
            <h1 className=" text-text/color/secondary/display-s">Gyldendals designsystem</h1>
          </div>
          <div className="w-[30ch] h-56">
            <span className="text-text/color/primary/title-s text-base leading-normal">
              Design, bygg og skap gode og helhetlige løsninger med Gyldendals designsystem.
            </span>
          </div>
        </div>
        <div className="w-[275px] h-[270px] flex justify-center items-center grow relative hidden md:grid">
          <Image src={image} alt="Bilde" />
        </div>
      </div>
    </div>
  );
}
