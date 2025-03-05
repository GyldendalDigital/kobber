import {
  KobberHeading,
  KobberIngress,
  KobberTextHighlight,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"

export default async function Page() {
  return (
    <ContentLayout maxWidthSettings="full">
      <KobberTextWrapper>
        <KobberHeading>Embed test</KobberHeading>
        <KobberIngress>Viser komponenter fra Storybook via iframe.</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Knapp</KobberTextHighlight>
        </KobberHeading>
        <p>
          Knapper brukes for å utføre en bestemt handling eller trigge en hendelse. Den forteller
          hva som vil skje videre om den trykkes på.
        </p>

        {/* URL fra sanity */}
        <iframe
          src="https://kobber-storybook.gyldendaldigital.no/?path=/story/button--button&fullscreen=true&panel=right&nav=false"
          title="kode"
          width="100%"
          height="400"
        />
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Radio</KobberTextHighlight>
        </KobberHeading>
        <p>Radioknapper lar brukeren velge ett alternativ fra en gruppe med valg.</p>

        {/* URL fra sanity */}
        <iframe
          src="https://kobber-storybook.gyldendaldigital.no/?path=/story/radio--variants&fullscreen=true&panel=false&nav=false"
          title="kode"
          width="100%"
          height="400"
        />
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>List</KobberTextHighlight>
        </KobberHeading>

        {/* URL fra sanity */}
        <iframe
          src="https://kobber-storybook.gyldendaldigital.no/?path=/story/kobber-gyldendal-no-list--list&fullscreen=true&panel=right&nav=false"
          title="kode"
          width="100%"
          height="400"
        />
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Heading</KobberTextHighlight>
        </KobberHeading>

        {/* URL fra sanity */}
        <iframe
          src="https://kobber-storybook.gyldendaldigital.no/?path=/story/text--heading&fullscreen=true&panel=right&nav=false"
          title="kode"
          width="100%"
          height="400"
        />
      </KobberTextWrapper>
    </ContentLayout>
  )
}
