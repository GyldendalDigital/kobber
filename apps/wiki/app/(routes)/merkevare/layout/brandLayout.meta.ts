import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { metaBrandLayoutGrid } from "./grid/grid.meta"
import { metaBrandLayoutSpacing } from "./spacing/spacing.meta"

export const metaBrandLayout = pageMetadata(import.meta.url, {
  title: "Layout",
  image: placeholderImageUrl({}),
  children: [metaBrandLayoutGrid, metaBrandLayoutSpacing],
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
})
