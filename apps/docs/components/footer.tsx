import Image from "next/image"
import { damUrl } from "@/lib/damImageLoader"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={cn(pageLayoutStyles["page-spacing"], styles.wrapper)}>
      <Image
        alt="Gyldendal Logo"
        width={131}
        height={38}
        src={damUrl("D9ybaAQzaYm9EeK26gImQs", ".svg")}
      />
      <small>© {new Date().getFullYear()} Gyldendal</small>
    </footer>
  )
}
