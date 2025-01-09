import Image from "next/image"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLogoProduct } from "./productLogo.meta"

export const metadata = metaBrandLogoProduct

export default function Page() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Varianter
        </KobberHeading>
        <p>
          Produktlogoer har sitt eget logosymbol plassert i et rundt ikon. Logosymboler bør
          assosiere til navnet eller produktets kvaliteter.
        </p>
        <p>
          Logoene finnes i positiv og negativ variant avhengig av plassering på mørk eller lys
          bakgrunn. Kun logosymbolet kan brukes i kontekst der det ikke er plass til hele logoen,
          som for eksempel i mobilvisning av brukergrensesnittet.
        </p>
        <p>
          Utvikles det ett nytt produkt eller tjeneste, skal det søkes om ny logo; se kontaktsiden.
        </p>
        <Image
          src={damUrl("7QMhG4Do4FMAPwZw2hsz8W")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendals primærlogo"
        />
      </KobberTextWrapper>
    </SectionLayout>
  )
}
