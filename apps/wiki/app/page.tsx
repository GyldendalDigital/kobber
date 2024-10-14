import { Banner } from "@/components/banner";
import GylImage from "@/public/gyl-art.png";
import { FeatureBoxType, AwardType } from "@/types/types";
import { AwardListItem } from "@/components/award-list-item";
import { FeatureBoxGrid } from "@/components/feature-box-grid";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 md:gap-48 pb-20 ">
      <Banner image={GylImage} className="-mt-72 md:h-[calc(617px+72px)]" />
      <div className="pt-48 md:py-0 pb-0 flex flex-col gap-14 mx-auto max-w-max-width">
        <div className="grid gap-24">
          <h4 className="text-text/color/primary/heading-s text-primary-heading-s font-normal px-main ">
            Kom i gang
          </h4>
          <FeatureBoxGrid items={boxes} />
        </div>
        <div className="grid px-main ">
          <div className="min-h-96 flex flex-col gap-16">
            <h3 className="text-text/color/primary/title-m text-primary-title-m">
              Hva er nytt?
            </h3>
            {news()
              .slice(0, 3)
              .map((item, index) => (
                <AwardListItem key={index} award={item} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const boxes: FeatureBoxType[] = [
  {
    title: "Introduksjon av Kobber",
    href: "/kom-i-gang",
    image:
      "https://s3-alpha-sig.figma.com/img/8e0b/a371/b639b9d7663fffa5a7e16025f25b16ba?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MfZW6OFr9xlqTRa7PsvHVpZ0wmYI2sAT8oj0DlLw5t5tPCyBO-kfWxIm6byaHxF5drCoeoqTbRb755GOzRmAi7WDQi0idUDNN2MDtLCYQ4BPsh8ldn7cQtkmx-9vGGRfwaeka-g2yl5M4p1VnllqGyHIp6dMgLAoo8bo7g8oxZjIDPpie0zoG8YAPfvukt~3K0re7xtCCxOeRGHJ27FfhAvNfBP7noe5LIqqIql2C9Wjo80~9FFtS-NQXuRqvcZ~FVvJDhtsOphLhizGD30vVOMqhdnhB7Tp8X0~Tysp0PJLYCv9Mp8TogWCKQ-CPHAR3L0DcDw2kkZgLGcEw7Mijw__",
  },
  {
    title: "Vår nye Gyldendal-logo",
    image:
      "https://s3-alpha-sig.figma.com/img/c92e/0207/f55d6180c7b03ebf8d55d8f45a683d46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ft~PXBe2xOVfiZqPNhxdtPTjz96mT~8L62Gk2WHqhAyzv609cFmXXsn5uUUZizuKR0UdxYLM3Jr87ymDYA9apSmq5Li-yVEG5oeEmF6FW9S9BrMGyl5yjrnI4Vfk2hSGFUacAQows9xXNRvgSJeGUasebQF0Px2wTPoCtgE6Uej-Zn5UOgLay6ioy6PThBYZAVn7GpWvTgw9jPmeajbrCWjS-3O6pIjyayAc3MT9mvpQH8Tq7JOl0CtDqIF4nhYBD7GCK9m8c1Uwfm8RRrqKR85bjLwz3g1SVeKHvWWrOec2sYmJQnZMnFi~KljzTSnQ7n54QP6qyk511NtdnvlM7g__",
    href: "/merkevare/logo",
  },
  {
    title: "Vår nye fargepalett",
    image:
      "https://s3-alpha-sig.figma.com/img/c0bd/5997/d40bc8e572d880e0917f7cbe83c42864?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNyrhDp0vGQNQbs5zwuOnlDaj8yqEJutadpm5AaJc~YVsNWBVKRJHGTtvW4ZOAEPMCVXsAAVOWDVH5Eo-bJaffr3YCxVchljXac4Qcr4jHVIrlPtYZEoZpy~R0FreJ6GGSubD1bgKcm5cvSdIWi6H9SuSId1Ckv8e85qqamSJSlWCj3HIBGOhOM9rLwXVbrhmKy8Ip3xtOYoYJHh-lbmZUsXLw-TBy~jUHECbty2-MqL5m~heJqU2I~ivi1PN5Ho2ogl-T8A0uVlWD136AQYpvgJGWVnlloSSqS~TL-K~SMP9QJz2Y4xU0uWxdz5JawjXS3re7-28viv9-zno9aKcA__",
    href: "/merkevare/farger",
  },
  {
    title: "Fonter",
    image:
      "https://s3-alpha-sig.figma.com/img/a0e5/4630/c63cadc25209a28c4fd849d7d2656026?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKWGK~GBCPz6-~TeTUQXc3yViL~dxU86A~K2iP6Nqy0eOVqIC0KtwI7B5NSM~7W1H4STJ4Nd4uZl051ree65HtEUZG3qnqMm78oFM3tHPqw90O4g-90~MFe0WXaRkqaMUHENipdzuIVth~AFaCAly3Pg2u4XA~5TrPWMkLZzHCf6IugR~nY7uzJ04e3dF2Svfkmy5KBWgSuLLvMDKWWU3-CgmyQ6QHjwqZvWmOczFj0zSXcprU~qR6~9eFJ~qOj3271JhMFzcTeA0rs2C8GIcZxj8rZcvoMlauF5FE2cQ13NP00Fg746PwKF3IWwTpkalCZhmZ4pH3JN0BVC4mHnCA__",
    href: "/merkevare/typografi",
  },
];

const news = (): AwardType[] => [
  {
    title: "Nyeste nyhet",
    date: new Date(),
  },
  {
    title:
      "Nest nyeste nyhet - denne har litt lengre tekst som kan gå langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt over maksbredde",
    date: new Date("2023"),
  },
  {
    title:
      "Den nest eldste nyheten - siste vises ikke fordi det bare er plass til tre",
    date: new Date("2022"),
  },
  {
    title: "Den eldste nyheten",
    date: new Date("2021"),
  },
];
