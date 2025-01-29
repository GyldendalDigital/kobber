import { pageMetadata } from "@/lib/metadata.utils"
import { metaGettingStartedHow } from "./hvordan-bruke-kobber/how.meta"
import { metaGettingStartedIntro } from "./introduksjon/intro.meta"
import { metaGettingStartedContact } from "./kontakt/contact.meta"
import { damUrl } from "@/lib/damImageLoader"

export const metaGettingStarted = pageMetadata(import.meta.url, {
  title: "Kom i gang",
  image: damUrl("2bULAP2gabp9rC4A1CbQSB", ".jpg"),
  description:
    "Velkommen til Gyldendals designsystem. Her finner du informasjon om hvordan du kommer i gang med designsystemet.",
  children: [metaGettingStartedIntro, metaGettingStartedHow, metaGettingStartedContact],
  redirectsTo: metaGettingStartedIntro.href,
})
