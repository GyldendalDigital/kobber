import { RouteDataType } from "@/types/types"
import { BRANDING_URL, COMPONENTS_URL } from "@/config/routes"

export const GetStartedRoutesData: RouteDataType[] = [
  {
    heroImage:
      "https://s3-alpha-sig.figma.com/img/5505/f80c/a2b510e6702b688d6bbec374cd0d646b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f15EYzOIvgaQ3YpGcLlm~Nzby2cvmMDH3Co7dUyZbOZO5GAAl7CixnzHTcat9NWxA1XMRpN8D43sCVzgSGVa6p3bfQC79mZSvMxKdgQwCBZiW3nM6wHrZOBRTCkDdvJEeLqQxUq6o9u37XHk-Uglppse8IM0n-K5IsAkTt6or3kd3OdOkSc~beWrK7JJEnecQt6L~aqP0JIaaFy83XkcO~V1Mylppu8zEIfkVKuoIxAB0ciY66nyg14yH1vSIZibN0XxmEbvQiy6JpGzxKdQOaRcoPpbnQDXEy2v~2OYY92ubiHK24FqeWnteEqQVjtll88yyiwX9N~qcbSveo2M2A__",
    topicTitle: "Designsystemet Kobber",
    title: "Et verktøy for samspill og synergier",
    href: "introduksjon",
    hrefTitle: "Introduksjon",
    description:
      "Designsystemet vårt sikrer konsistent og god brukeropplevelse på tvers av nettsider, publikasjoner, kommunikasjon og løsninger i Gyldendal.",
    text: `Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, adaptive ressurser som komponenter, malverk, retningslinjer og kode. Dette systemet muliggjør en raskere og mer effektiv praksis for konsistent merkevarebygging, brukergrensesnitt og kommunikasjon til våre sluttbrukere.

Dette består av mer enn en logo – dette representerer våre verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere. Dette settes i system i flere formater og denne nettsiden er en del av det. Den er ment for internt bruk og har som mål å gi en klar forståelse av Kobber.

Det er viktig å sette seg inn i nettsiden for å opprettholde merkevarens integritet og styrke over tid. Følg retningslinjene og kom gjerne med tilbakemeldinger og forslag til oppdateringer og forbedringer. Sammen skaper vi en levende profil!`,
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
