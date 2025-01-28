import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { HeroImage } from "@/components/hero-image"
import { metaEMailTemplate } from "./e-post-template.meta"

export const metadata = metaEMailTemplate

export default function EPostTemplatePage() {
  return (
    <ContentLayout>
      <HeroImage src={metadata.image} />
      <KobberTextWrapper>
        <KobberHeading>E-post signatur</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Signaturen er skrevet ut i Arial og består av identitetsfarger og logo. Det skal{" "}
          <span className="text-[#DC134F]"> ikke </span>
          gjøres endringer på malen eller tilføyes noe til signaturen, som for eksempel bilder,
          lenker, slagord, kampanjer eller annonseringer.
          <br />
          <br />
          Signaturen må legges inn i Outlook. Lenke til oppskrift på signaturen deles på e-post og i
          vår teams-kanal.
        </p>
      </KobberTextWrapper>
    </ContentLayout>
  )
}
