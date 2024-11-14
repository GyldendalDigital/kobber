import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandColorUi = pageMetadata(import.meta.url, {
  title: "UI-farger",
  image: damUrl("0B8KFix1aoOBfZrSchmiFk"),
  description:
    "Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett.",
})