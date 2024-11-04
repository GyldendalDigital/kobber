import { RouteDataType } from "@/types/types"
import { BRANDING_URL, COMPONENTS_URL } from "@/config/routes"

export const GetStartedRoutesData: RouteDataType[] = [
  {
    // heroImage: null,
    topicTitle: "Designsystemet Kobber",
    title: "Et verktøy for samspill og synergier",
    href: "introduksjon",
    hrefTitle: "Introduksjon",
    description:
      "Designsystemet vårt sikrer konsistent og god brukeropplevelse på tvers av nettsider, publikasjoner, kommunikasjon og løsninger i Gyldendal.",
    text: `Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk, retningslinjer og kode. Samtidig tydeliggjør det vår merkevarestrategi, våre felles verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere.

Designsystemet muliggjør en raskere og mer effektiv praksis for konsistent merkevarebygging,
produktutvikling og kommunikasjon. Det skaper en tydeligere felles retning, og bidrar til økt kjennskap til og gjenkjennelighet av Gyldendal.

Det skal bidra til å styrke fellesskapsfølelsen på tvers av hele Gyldendal, ved å legge til rette for bedre samarbeid, transparens, synergier og deling av kompetanse og metoder på tvers av fagfelt, avdelinger og produkter.

Navnet «Kobber» er inspirert av kobberdøra, inngangen til Gyldendalhuset, og symboliserer det
tradisjonsrike i kombinasjon med modernisering og fremtid. Kobber er et stabilt og lett bearbeidbart metall som leder strøm, og representerer dermed både våre fysiske produkter og digitale løsninger.

Denne nettsiden er en veileder for å sikre konsistent representasjon og implementasjon av Gyldendals merkevare- og designsystem på tvers av kontekster og flater. Den er ment for internt bruk og for eventuelle eksterne samarbeidspartnere. 

Det er viktig å sette seg inn i merkevaremanualen og designsystemet for å opprettholde merkevarens integritet og styrke over tid. Vi anbefaler å følge retningslinjene, samt komme med tilbakemelding og forslag til oppdatering og forbedring. Sammen skaper vi en levende profil!`,
  },
  {
    title: "Lager du grensesnitt?",
    topicTitle: "Test",
    description: "Test",
    text: "Test",
    href: `grensesnitt`,
    hrefTitle: "Grensesnitt",
  },
  {
    title: "Skriver du kode?",
    topicTitle: "Test",
    description: "Test",
    text: "Test",
    href: `kode`,
    hrefTitle: "Kode",
  },
  {
    title: "Lager du innhold?",
    topicTitle: "Test",
    description: "Test",
    text: "Test",
    href: `innhold`,
    hrefTitle: "Innhold",
  },
  {
    title: "Markedsføring?",
    topicTitle: "Test",
    description: "Test",
    text: "Test",
    href: `markedsforing`,
    hrefTitle: "Markedsføring",
  },
  {
    title: "Tilgjengelighet",
    topicTitle: "Test",
    description: "Test",
    text: "Test",
    href: `tilgjengelighet`,
    hrefTitle: "Tilgjengelighet",
  },
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
