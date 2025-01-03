import Image from "next/image"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandIconGuidelines } from "./guidelines.meta"

export const metadata = metaBrandIconGuidelines

export default function RetningsLinjerPage() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          Utforming
        </KobberHeading>
        <p>
          For å sikre konsistens og lesbarhet, bruker vi moderne, enkelt utformede ikoner i
          begrensede størrelser. Gjennomgå Kobber sitt ikonsett før du implementerer nye ikoner.
          Hvis det er nødvendig å introdusere et nytt ikon, må du følge riktig prosess for å få det
          innført i designsystemet.
        </p>

        <div className="flex flex-col items-center justify-center gap-[10px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("99VG7ccXKQY9CIM8EjZlPp", ".svg")}
            width={350}
            height={212}
            alt="Unngå ikoner med mange detaljer"
          />
          <Image
            src={damUrl("4RQUai5nqQ09ypUUY50Kxi", ".svg")}
            width={350}
            height={212}
            alt="Bruk enkle ikoner for bedre lesbarhet"
          />
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          Størrelser
        </KobberHeading>
        <p>
          Ikonene har en grunnstørrelse på 20 x 20 px for 1280px skjermbredde. Dette inkluderer
          rammen rundt ikonet.
        </p>

        <div className="flex flex-col items-center justify-center gap-[10px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("FIBrL3LF4S_Ak9pOo3cu-5", ".svg")}
            width={355}
            height={218}
            alt="Unngå ikoner med mange detaljer"
          />
          <Image
            src={damUrl("2WjVTWDjqY3B7WvL0v3H9A", ".svg")}
            width={355}
            height={218}
            alt="Bruk enkle ikoner for bedre lesbarhet"
          />
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          Vekt
        </KobberHeading>
        <p>
          For å sikre at ikonene beholder lik tykkelse ved skalering, unngår vi å justere vekten
          eller bruke størrelsesvariabler. Vi anbefaler å bruke skaleringsknappen &apos;K&apos; i
          Figma, slik at vekten skaleres riktig med innholdet.
        </p>

        <div className="flex flex-col items-center justify-center gap-[24px]">
          <Image
            src={damUrl("5iplNeysq0SAVJUjxMHKTr", ".svg")}
            width={711}
            height={29}
            alt="Unngå å justere vekten på ikonet via stroke i Figma."
          />
          <div className="flex flex-col gap-[10px] md:grid md:grid-cols-2">
            <Image
              src={damUrl("F0JSVaEMqjM8ijIyaGdz9o", ".svg")}
              width={355}
              height={218}
              alt="Unngå å justere vekten på ikonet via stroke i Figma."
            />
            <Image
              src={damUrl("CWvGe71_qwZ9Z5sXONjuFC", ".svg")}
              width={355}
              height={218}
              alt="Bruk 'K' tasten til å skalere for riktig høyde og vekt utover grunnstørrelsen 20px."
            />
          </div>
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          Tekst og ikoner
        </KobberHeading>
        <p>
          Når ikoner brukes sammen med tekst, er formålet å tydeliggjøre en beskjed eller handling.
          Det er viktig å sørge for at både ikon og tekst har samme tykkelse som angitt i
          designsystemet. Husk å sentrere ikonet i forhold til midtpunktet av teksten for å unngå
          visuell ubalanse.
        </p>

        <div className="flex flex-col items-center justify-center gap-[24px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("7qNlcRPCKD1B_MdHicbvMs")}
            width={340}
            height={166}
            alt="Ikke bruk forskjellig vekt på ikon og tekst."
          />
          <Image
            src={damUrl("Bddzot0V48JAh_MDtKcnYP")}
            width={340}
            height={166}
            alt="Bruk samme vekting på ikon og tekst."
          />
          <Image
            src={damUrl("95uHXxRZa5rAASKawBNqZe")}
            width={340}
            height={166}
            alt="Ikke la tekst og ikon ha samme topp eller bunn linje."
          />
          <Image
            src={damUrl("CxzTBFw7qQBBjLlO8hMcIL")}
            width={340}
            height={166}
            alt="Sentrer ikon og tekst i midten."
          />
          <Image
            src={damUrl("7c9LjhXXqLR92k_nbeur8H")}
            width={340}
            height={166}
            alt="Vær obs på brukervennligheten av ikoner som ikke støttes med tekst."
          />
          <Image
            src={damUrl("E6ITr9TYaaGAeJrjYWAxtU")}
            width={340}
            height={166}
            alt="Tekst sammen med ikon støtter navigasjonen."
          />
        </div>
      </KobberTextWrapper>
    </SectionLayout>
  )
}
