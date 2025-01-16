import Image from "next/image"
import { damUrl } from "@/lib/damImageLoader"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"

export default function Footer() {
  return (
    <footer className={cn(pageLayoutStyles["page-spacing"])}>
      <div className="mx-auto flex w-full flex-col items-center gap-4 pb-[60px] pt-[72px] md:flex-row md:justify-between md:pt-[108px]">
        <Image
          alt="Gyldendal Logo"
          width={131}
          height={38}
          src={damUrl("D9ybaAQzaYm9EeK26gImQs", ".svg")}
          unoptimized
        />
        <span className="text-center text-[12px] text-[#A35E70]">
          © {new Date().getFullYear()} Gyldendal
        </span>
      </div>
    </footer>
  )
}
