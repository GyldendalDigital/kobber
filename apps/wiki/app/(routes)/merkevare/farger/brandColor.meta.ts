import { pageMetadata } from "@/lib/metadata.utils"
import { metaBrandColorIdentity } from "./identitetspalett/identity.meta"
import { metaBrandColorTheme } from "./temafarger/theme.meta"
import { metaBrandColorUi } from "./ui-farger/ui.meta"

export const metaBrandColor = pageMetadata(import.meta.url, {
  title: "Farger",
  image: metaBrandColorIdentity.image,
  children: [metaBrandColorIdentity, metaBrandColorTheme, metaBrandColorUi],
  description:
    "Farger er en viktig del av Gyldendals merkevare, og er laget for å balansere det funksjonelle og det emosjonelle. Fargepaletten er laget for å håndtere et bredt utvalg av ulike målgrupper.",
})
