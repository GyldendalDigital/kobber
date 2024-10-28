import { PageDetails, RouteDataType } from "@/types/types"
import { BRANDING_URL, COMPONENTS_URL } from "@/config/routes"
import { placeholderImageUrl } from "@/lib/utils"
import { metadata } from "./page"

export const GetStartedRoutesData: (RouteDataType & PageDetails)[] = [
  {
    heroImage: placeholderImageUrl({ textRows: ["placeholder introduksjon"] }),
    topicTitle: "Designsystemet Kobber",
    title: "Introduksjon",
    href: `${metadata.href}/introduksjon`,
    hrefTitle: "Introduksjon",
    description:
      "For å sikre konsistent og god brukeropplevelse på tvers av nettsider, publikasjoner, kommunikasjon og løsninger i Gyldendal har vi laget designsystemet Kobber.",
    text: `Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, adaptive ressurser som komponenter, malverk, retningslinjer og kode. Dette systemet muliggjør en raskere og mer effektiv praksis for konsistent merkevarebygging, brukergrensesnitt og kommunikasjon til våre sluttbrukere.

Kobber skaper en tydeligere retning for både markedsføring og produktutvikling. Det bidrar til økt kjennskap til og gjenkjennelighet av mormerket Gyldendal, samtidig som det styrker fellesskapsfølelsen blant medarbeidere på tvers av hele konsernet. Merkevaren vår skal formidle en forent forståelse av hva Gyldendal står for.

Kobber legger til rette for bedre samarbeid, transparens, synergier og deling av kompetanse og metoder på tvers av fagfelt, avdelinger og produkter. Dette gjør oss mer effektive og gir en tydelig felles retning og ramme rundt alt vi skaper.

Navnet «Kobber» er inspirert av kobberdøra, portalen inn til Gyldendalhuset, som symboliserer det tradisjonsrike i kombinasjon med modernisering og fremtid. Kobber er et stabilt og lett bearbeidbart metall som leder strøm, og representerer dermed både våre fysiske produkter og digitale løsninger.

Gyldendals merkevare er mer enn en logo – den representerer våre verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere. Dette settes i system i flere formater og denne nettsiden er en del av det. Den er ment for internt bruk og har som mål å gi en klar forståelse av Gyldendals merkevare. 

Det er viktig å sette seg inn i nettsiden for å opprettholde merkevarens integritet og styrke over tid. Vi anbefaler å følge disse retningslinjene og komme med tilbakemelding og forslag til oppdatering og forbedring. 

Sammen skaper vi en levende profil!`,
  },
  {
    title: "Hvordan bruke kobber",
    topicTitle: "Hvordan bruke kobber",
    description: "Hovrdan bruke kobber",
    text: "Hvordan bruke kobber",
    href: `${metadata.href}/hvordan-bruke-kobber`,
    hrefTitle: "Hvordan bruke kobber",
    status: "kommer",
  },
  // {
  //   title: "Skriver du kode?",
  //   topicTitle: "Test",
  //   description: "Test",
  //   text: "Test",
  //   href: `${metadata.href}/kode`,
  //   hrefTitle: "Kode",
  //   status: "kommer",
  // },
  // {
  //   title: "Lager du innhold?",
  //   topicTitle: "Test",
  //   description: "Test",
  //   text: "Test",
  //   href: `${metadata.href}/innhold`,
  //   hrefTitle: "Innhold",
  //   status: "kommer",
  // },
  // {
  //   title: "Markedsføring?",
  //   topicTitle: "Test",
  //   description: "Test",
  //   text: "Test",
  //   href: `${metadata.href}/markedsforing`,
  //   hrefTitle: "Markedsføring",
  //   status: "kommer",
  // },
  // {
  //   title: "Tilgjengelighet",
  //   topicTitle: "Test",
  //   description: "Test",
  //   text: "Test",
  //   href: `${metadata.href}/tilgjengelighet`,
  //   hrefTitle: "Tilgjengelighet",
  //   status: "kommer",
  // },
]

export const ComponentsRoutesData: RouteDataType[] = [
  {
    topicTitle: "Komponenter",
    title: "Introduksjon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${COMPONENTS_URL}/introduksjon`,
    hrefTitle: "Introduksjon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    title: "Knapper",
    description: "Test",
    href: `${COMPONENTS_URL}/knapper`,
    hrefTitle: "Knapper",
    text: "Knapper",
  },
  {
    title: "Check box",
    description: "Test",
    href: `${COMPONENTS_URL}/check-box`,
    hrefTitle: "Check box",
    text: "Check box",
  },
  {
    title: "Corner box",
    description: "Test",
    href: `${COMPONENTS_URL}/corner-box`,
    hrefTitle: "Corner-box",
    text: "Corner-box",
  },
]

export const BrandingRoutesData: RouteDataType[] = [
  {
    topicTitle: "Test",
    title: "Vår kjernehistorie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/vaar-kjernehistorie`,
    hrefTitle: "Vår kjernehistorie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Våre verdier",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/vaare-verdier`,
    hrefTitle: "Våre verider",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Designprinsipper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/design-prinsipper`,
    hrefTitle: "Designprinsipper",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Farger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/farger`,
    hrefTitle: "Farger",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Typografi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/typografi`,
    hrefTitle: "Typografi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Ikoner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/ikoner`,
    hrefTitle: "Ikoner",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Layout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/layout`,
    hrefTitle: "Layout",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Spacing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/spacing`,
    hrefTitle: "Spacing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Bilder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/bilder`,
    hrefTitle: "Bilder",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    topicTitle: "Test",
    title: "Animasjon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    href: `${BRANDING_URL}/animasjon`,
    hrefTitle: "Animasjon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
]
