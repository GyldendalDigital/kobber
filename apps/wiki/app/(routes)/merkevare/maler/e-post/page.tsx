import { damUrl } from "@/lib/damImageLoader"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaEMailTemplate } from "./e-post-template.meta"

export const metadata = metaEMailTemplate

export default function EPostTemplatePage() {
  return (
    <SectionLayout>
      {/* <HeroImage src={metadata.image} /> // metadata.image did not work? */}
      <HeroImage src={damUrl("3ETp8prlKjW9JIxK5G5wz5", ".png")} />
      <ArticleWrapper>
        <Heading>E-post signatur</Heading>
        <Ingress>{metadata.description}</Ingress>
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
      </ArticleWrapper>
    </SectionLayout>
  )
}
