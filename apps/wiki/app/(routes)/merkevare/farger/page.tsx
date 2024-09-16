import { FargerBox } from "./_components/farger-box";

export default function FargerSection() {
  return (
    <section className="w-full md:w-[858px] grid gap-14">
      <div className="w-full md:w-[857px] gap-7 grid">
        <h1 className="text-text/color/primary/display-s text-[48px]">Farger</h1>
        <p className="text-text/color/primary/title-m leading-[33.6px] w-[60ch]  text-[18px] ">
          Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt
          utvalg av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i
          daglig bruk av digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være
          lett å lage fargekombinasjoner som oppfyller kravene til universell utforming.
        </p>
      </div>
      <div className="flex flex-row items-center gap-5">
        <FargerBox />
        <FargerBox />
        <FargerBox />
      </div>
    </section>
  );
}
