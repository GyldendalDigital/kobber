import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { metaBrandLogoGyldendal } from "./gyldendal-logo/gyldendalLogo.meta"
import { metaBrandLogoProduct } from "./produktlogoer/productLogo.meta"

export const metaBrandLogo = pageMetadata(import.meta.url, {
  title: "Logo",
  image: damUrl("CtM-1DQEapL98pVi_5S64C"),
  children: [metaBrandLogoGyldendal, metaBrandLogoProduct],
  description:
    "Logostrukturen er et viktig element i Gyldendal sin profil og er med på å danne kjennskap til merkevaren. Nivåene i merkevarearkitekturen reflekteres i logostrukturen. Å følge prinsippene og retningslinjene for logobruk er nødvendig for å beholde integriteten til logoene i alle typer kontekster.",
})
