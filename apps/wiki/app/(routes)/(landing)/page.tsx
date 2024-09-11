"use client"
import { ContentPane } from "@/components/content-pane"
import GylImage from "@/public/gyl-art.png"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { FeatureBoxType } from "@/types/types"
// import {
// 	KobberCheckbox,
// 	KobberProgressBar,
// 	KobberGrid,
// 	KobberProgressBarItem,
// } from "@gyldendal/kobber-components/react"

const boxes: FeatureBoxType[] = [
    {
        title: "Er du ny?",
        href: "/kom-i-gang",
        image: "https://s3-alpha-sig.figma.com/img/0509/a302/e003ea4737e6afd9be6e28a63111fcdb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYnVRhM329sk1it3qkKERe3f4Dti3M~IM~p-YHp3Ezn2flmn7ceUOUtmINQaFz1JWVpqeq-owkMuhMYP2M9cmHKmVriMNDdStTQdBA1VVOCC~aF5g3-kzkSA-5lD8AHAkhowKQZafGmVtn4fyQhdx7Wm~gj00i4BgI2qiBnnblcem74wayvEA2-ogsUifYmZRaRBxXlurwrPBR07hMnMwIjgT9CoV04eEEIQBzBT9UZveF-Rau12WPmA-qholIHReoPQzSzey9c7O4vXhtD6QFvl09XP5jlPJ8cudXcRi0ygRZlNBt~izlFaxk-AjOLWdm3g0FOW7ydM7oeT8yRNwA__"
    },
    {
        title: "Lager du grensesnitt?",
        image: "https://s3-alpha-sig.figma.com/img/edd1/c9b4/92c977d332452fc3785b2cff30e3825b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc4jLjsEao7IgE3YelGnXGAetflRTMmlqhWHMsnrH1vCVXjxUtCYwLIR0Y7o1FTTAuVwP4oe5OORLV~CwQ2jeLD~1Mu9z7Db~uivA8pSmM4Df41yX6R~YjXKv8KnsEcjYocAN7Pgu~w62bUrrCRQmNwVYPQ2b9jMN1vXoZrIw8zD13MKnDEdoplq~zl3pdm0usau6xnsx-mB~f0xz8a2-xr1WouXE0-uOg3QbB--tTKu9B2FXA~SYszb6DU4FkU9Y-wttMw1ytWt9bEaID3QZhd1hC0FxClUsHZ9PzhkXSOn6zf16KMxvhwjjREhI1sVMltK4HN81ie1Gd-FQOzmXg__"
    },
    {
        title: "Skriver du kode?",
        image: "https://s3-alpha-sig.figma.com/img/9b0e/7b3e/70fafd982628eb2272916597c6befe17?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkEU0REm-HBFqe8c7GdkGhRhsGTgfzTzpZKzy4ZX3IcvEPB0chyCpca0gz-tycMw4TNwxi1Yv6RAGrEyljm2O2XqJMmWbd5yEkL7rY1ma7TJx7VfFN57qsU49TGcu5-k5hPeCTLO~HEfRxCGAufPaiuRXzc5DfDaGdbF~V8x6ceC1Yzymb7dp24-ix2NWa7nzHGkdso17OJ2jUzgH9HyBWpI3Ync2CtGC~-CFKzGWhzL5Z0F~fTkDar-RMhL-maHIpscuNZ8sFhQUsz-1TiWl52QVAHcX6LNYSiW-kF~p07upD5L7nxxc2GeeAV9YLGY5bbp5njDsxBGH9VDkEW1~A__",
        href: "/komponenter"
    },
    {
        title: "Lager du innhold?",
        image: "https://s3-alpha-sig.figma.com/img/9693/8f6c/2a0b94c58a7b9750c6084f5b37bd6960?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HM6eqlgtox3trcq4zRqfsiJdxuh4IOqbMXpHruTFIdPA2FZiFYWShkV8N8FTGv8kXyLLZZYhItOdDknHxj95-NNmbAfyWkGXdDO2AakYpmHIWMNnH209GzJWEx1H~hvDcDOnwYrKf4Q1DaUWssab4~SBzdZ4C6Mug-RHRMwXIGa1Zm62yXvU1f11ixNZ71-BvxhZ29mpvecWrT4-E2twlcIreF9hq-4LWuR~GuLX-J-L1c7~KhuGXcMD6fXeO3V6ssIb6MZxw7xwG0Xci6cms6AlOF-61tPFu10Zr8vOBUIdUMf5nqx-KiE3zePGtoVVQAmj2hnQ99o8S3kEVt-uEA__"
    }
]

export default function Home() {
    return (
        <main className="space-y-10">
            <ContentPane image={GylImage} />
            <FeatureBoxGrid items={boxes} />
            {/* <KobberCheckbox />
			<KobberProgressBar>
				<KobberProgressBarItem />
			</KobberProgressBar>
			<KobberGrid>
				<div>Div 1</div>
				<div>Div 2</div>
			</KobberGrid> */}
        </main>
    )
}
