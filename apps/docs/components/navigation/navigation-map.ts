import { metaGettingStarted } from "../../app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "../../app/(routes)/komponenter/components.meta"
import { metaBrand } from "../../app/(routes)/merkevare/brand.meta"
import { metaBrandColor } from "../../app/(routes)/merkevare/farger/brandColor.meta"
import { metaBrandIcons } from "../../app/(routes)/merkevare/ikoner/brandIcons.meta"
import { metaBrandLogo } from "../../app/(routes)/merkevare/logo/logo.meta"
import { metaEMailTemplate } from "../../app/(routes)/merkevare/maler/e-post/e-post-template.meta"
import { metaPowerpointTemplate } from "../../app/(routes)/merkevare/maler/powerpoint/powerpoint-template.meta"
import { metaWordTemplate } from "../../app/(routes)/merkevare/maler/word/word-template.meta"
import { metaBrandLevel } from "../../app/(routes)/merkevare/merkevarehierarki/brandLevel.meta"
import { metaBrandTypography } from "../../app/(routes)/merkevare/typografi/brandTypography.meta"
import { metaTokens } from "../../app/(routes)/tokens/tokens.meta"
import { PageMetadata } from "../../lib/metadata.utils"

export const mainRoutes = [metaGettingStarted, metaBrand, metaTokens, metaComponents]

export type NavigationGroup = {
  title: string
  items: PageMetadata[]
  isOpenInitially?: boolean
}

export const metaBrandNavigationGroups = [
  {
    title: "Introduksjon",
    items: [
      metaBrandLevel,
      { href: "#", title: "Våre verdier", status: "kommer", image: undefined },
      { href: "#", title: "Vår stemme", status: "kommer", image: undefined },
      { href: "#", title: "Designprinsipper", status: "kommer", image: undefined },
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
] satisfies NavigationGroup[]
