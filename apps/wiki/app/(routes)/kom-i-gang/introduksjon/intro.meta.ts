import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaGettingStartedIntro = pageMetadata(import.meta.url, {
  title: "Introduksjon",
  image: placeholderImageUrl({}),
  description:
    "Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk, retningslinjer og kode. Samtidig tydeliggjør det vår merkevarestrategi, våre felles verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere.",
})
