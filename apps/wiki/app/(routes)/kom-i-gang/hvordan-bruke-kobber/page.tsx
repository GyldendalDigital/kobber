import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Hvordan bruke Kobber",
  image: placeholderImageUrl({}),
  description: "",
}

export default function HvordanBrukeKobber() {
  return <div></div>
  //   return     <SectionLayout>
  //       {heroImage ? <HeroImage src={heroImage} /> : null}
  //       <div className="grid gap-section/gap/horizontal">
  //         <div className="gap-y-text-section/gap/header/horizontal grid">
  //           {topicTitle ? (
  //             <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">{topicTitle}</h1>
  //           ) : null}
  //           <h2 className="text-[48px] leading-[57.6px] text-[#DC134F]">{title}</h2>
  //         </div>
  //         <p className="max-w-[712px] text-[24px] leading-[33.6px] text-[#532D37]">{description}</p>
  //         <p className="text-16 max-w-[712px] whitespace-pre-wrap leading-[24px] text-[#532D37]">
  //           {text}
  //         </p>
  //       </div>
  //     </SectionLayout>
}
