import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { metaGettingStartedHow } from "./hvordan-bruke-kobber/how.meta"
import { metaGettingStartedIntro } from "./introduksjon/intro.meta"
import { metaGettingStartedContact } from "./kontakt/contact.meta"

export const metaGettingStarted = pageMetadata(import.meta.url, {
  title: "Kom i gang",
  image: placeholderImageUrl({}),
  description:
    "Velkommen til Gyldendals designsystem. Her finner du informasjon om hvordan du kommer i gang med designsystemet.",
  children: [metaGettingStartedIntro, metaGettingStartedHow, metaGettingStartedContact],
  redirectsTo: metaGettingStartedIntro.href,
})
