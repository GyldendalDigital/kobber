import { pageMetadata } from "@/lib/metadata.utils"
import { damUrl } from "../../../../lib/damImageLoader"
import { metaTokensIntro } from "./hva-er-tokens/tokensIntro.meta"
import { metaCollections } from "./kolleksjoner/collections.meta"
import { metaLayout } from "./layout/tokensLayout.meta"

export const metaTokens = pageMetadata(import.meta.url, {
  title: "Tokens",
  image: damUrl("AiqcjsC9quT9X0rbMcayLp", ".svg"),
  description:
    "Designtokens er små, gjenbrukbare enheter med designinformasjon som farge, tekststørrelse, avstand og skygger. De fungerer som byggesteiner i et designsystem og sørger for at designet blir konsekvent på tvers av ulike flater og enheter. Ved å bruke tokens kan designere og utviklere enkelt oppdatere designet i én operasjon, og endringene vil automatisk slå gjennom i hele systemet.",
  children: [metaTokensIntro, metaCollections, metaLayout],
  redirectsTo: metaTokensIntro.href,
})
