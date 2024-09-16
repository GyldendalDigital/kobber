import { TextCollection } from "@/components/text-collection";
import { FargerBox } from "./_components/farger-box";

export default function FargerSection() {
  return (
    <section className="w-full md:w-[858px] grid gap-14">
      <TextCollection
        title="Farger"
        description="Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt utvalg
        av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i daglig bruk av
        digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være lett å lage
        fargekombinasjoner som oppfyller kravene til universell utforming."
      />
      <div className="flex flex-row items-center gap-5">
        <FargerBox type="Identitetspalett" />
        <FargerBox type="Temafarger" />
        <FargerBox type="UI-farger" />
      </div>
    </section>
  );
}
