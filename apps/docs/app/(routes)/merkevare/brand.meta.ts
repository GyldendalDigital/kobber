import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { Props as SideNavGroupProps } from "@/components/navigation/side-nav-group"
import { metaBrandColor } from "./farger/brandColor.meta"
import { metaBrandIcons } from "./ikoner/brandIcons.meta"
import { metaBrandLogo } from "./logo/logo.meta"
import { metaEMailTemplate } from "./maler/e-post/e-post-template.meta"
import { metaPowerpointTemplate } from "./maler/powerpoint/powerpoint-template.meta"
import { metaWordTemplate } from "./maler/word/word-template.meta"
import { metaBrandLevel } from "./merkevarehierarki/brandLevel.meta"
import { metaBrandTypography } from "./typografi/brandTypography.meta"
import { metaBrandVaarStemme } from "./vaar-stemme/stemme.meta"

export const metaBrand = pageMetadata(import.meta.url, {
  title: "Merkevare",
  image: damUrl("4WYa-6IgqHmAdCdw9SxjB3"),
  children: [
    metaBrandColor,
    metaBrandIcons,
    metaBrandLogo,
    metaBrandLevel,
    metaBrandTypography,
    metaBrandVaarStemme,
    metaPowerpointTemplate,
    metaWordTemplate,
    metaEMailTemplate,
  ],
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
  redirectsTo: metaBrandLevel.href,
})

export const metaBrandNavigationGroups = [
  {
    title: "Introduksjon",
    items: [
      metaBrandLevel,
      { href: "#", title: "Våre verdier", status: "kommer", image: null },
      { href: "#", title: "Vår stemme", status: "kommer", image: null },
      { href: "#", title: "Designprinsipper", status: "kommer", image: null },
    ],
    isOpenInitially: true,
  },
  {
    title: "Identitetselementer",
    items: [metaBrandLogo, metaBrandColor, metaBrandTypography, metaBrandIcons],
    isOpenInitially: true,
  },
  {
    title: "Maler",
    items: [metaPowerpointTemplate, metaWordTemplate, metaEMailTemplate],
    isOpenInitially: true,
  },
] satisfies SideNavGroupProps[]
