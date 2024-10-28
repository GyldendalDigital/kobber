import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { FeatureBoxType } from "@/types/types"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { HeroBanner } from "@/components/hero-banner"

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col gap-y-content/gap/horizontal">
      <HeroBanner src={"./hero-svg.svg"} alt="Gyldendal Art" width={188} height={184} />
      <section className="grid gap-y-section/gap/horizontal">
        <h4 className="text-primary-heading-s font-normal text-[#481125ff]">Kom i gang</h4>
        <FeatureBoxGrid items={boxes} />
      </section>

      <section className="grid gap-y-section/gap/horizontal">
        <h3 className="text-primary-title-m text-[#481120]">Nyttige ressurser</h3>
        <ul className="flex flex-wrap items-center gap-[16px]">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.title}
                className="flex items-center gap-[8px] text-[14px] hover:underline"
              >
                {item.title}
                <ExternalLink className="size-[16px]" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

const boxes: FeatureBoxType[] = [
  {
    title: "Introduksjon av Kobber",
    href: "/kom-i-gang",
    image:
      "https://s3-alpha-sig.figma.com/img/8e0b/a371/b639b9d7663fffa5a7e16025f25b16ba?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQlQmDyESnj7pI70vtPN~idLx2aM6hzEnKXY~89bLQ-lozBNjkcsuNx5ScNEmvoZJWcOB2FTGS4deXqJoQIEU4~fTSvnr4lvkEfCC-RrBFNVArj1d6WQfz-hEvVg1YuKYAuF57u1eO76tNxqgvilywFwOi4Ocz4rYjW8V9HXMtZCcWcS538GEUAvhNT~80dXBbgfy4sPhgDE05LtwF3AoUi2k3AEHK29fLLqGAJVIK4htX1lDiLth0ea-cRioa0eHFHsLBXU-xzQBx4hP7fKCyCJDaxg3bPZp9rGe4Fv0-0JHNEmMf7VacVPeoSUt6LraiEHCAmhAng8Ex2oZi5drQ__",
  },
  {
    title: "Vår nye Gyldendal-logo",
    image:
      "https://s3-alpha-sig.figma.com/img/c92e/0207/f55d6180c7b03ebf8d55d8f45a683d46?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Av7mBg~AAsuUtiI1trXVQ1auE-kXUHEPqtuIyvp~FbqcFWyQK2RCcxt~BIdLJTlwEFf0HOhaGNQLREnWL0hLH0wdKyGTvvHBBVvozP2UjJCQxJU9ADKM-2uYmUOe6Zyb758EOqvvTZN9gJ7nELUswCm7KWxFuMidyz0kG2zKBDQohDw2FlR~UxY9CXxVmCeByz2oGLtINZNBiv~VXirFdZoGj23~MO5ivwP0GAo-53JNJYU~VPXW9Cax23AECedQgBTINX6IpsKvF93QQyZbXEQTohHfGNXhmjlO65gPuj6aoZl1YFxokSvZtDC7uyXQ95-arMEk6BWs9LTsHcStBQ__",
    href: "/merkevare/logo",
  },
  {
    title: "Vår nye fargepalett",
    image:
      "https://s3-alpha-sig.figma.com/img/c0bd/5997/d40bc8e572d880e0917f7cbe83c42864?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWlAZQWsCHr2N-9HK~VSHxnzGIvUMywpOe~QbqbRri3XkJ55uW59VomnOZYIr70fR2hTUJw3m7139IPjSsXB8NJw-gJ1miAgyIvRhiqmGLZPRlZ7AXngys7le8BeHth95xEiZLU5EehxoRa9GULwxKpWY2AI-H~lXUOT7hiMDVWzY1dQn5i-q8sra4sTjFYguJF9qiPzQL5J0XE4YgXypD7Nb8cEmJpQQB~td4~OtLeyLBD9mCBFWZSrcNtQXilYtwTQhq5EUCoGnVhqUNyZyw-XdWn74gSao2i2SsizMOYcAtfaKmgdpHvDNrla9IpvCTNnXwgewFtHDicqU1MaXQ__",
    href: "/merkevare/farger",
  },
  {
    title: "Fonter",
    image:
      "https://s3-alpha-sig.figma.com/img/2807/b0b8/d9fc7dfaa31a607ef149af8db641826c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFuOdR~VczaYiSyBIsJhJmtsi3OE8UOWI5vFqeYdvCQRdyQh1K1Wn9y0VFxWmb-z~CQ5v67wxzYOuAMNkeZAPJtVhfpS9GVqDlpR7ysI896y2EFjyklqgbCb78IhGyE95eg061uX14K2PIiJF9Ml4j~0koavOAG45kKNUAW~TWaknniGB23T2HF9gJu59nT1Obh1AGu3RSkNaI4kSTfuTnnSK1XWeNqzZsfgduuC7JabPoj3zc-KPCpFlu33Do23GhCuB99IY3fbygU9sdHDaoqhHduGyLSDKZRAIgB8rVQvo01Okdja0rndcFxEG6Qo3ZSdK5YU85zb43lmdShxnw__",
    href: "/merkevare/typografi",
  },
]

const links = [
  {
    title: "Github",
    href: "#",
  },
  {
    title: "Figma",
    href: "#",
  },
  {
    title: "DAM",
    href: "#",
  },
  {
    title: "Teams",
    href: "#",
  },
]
