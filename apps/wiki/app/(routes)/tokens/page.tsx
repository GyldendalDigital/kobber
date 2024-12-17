import * as tokens from "@gyldendal/kobber-base/themes/default/tokens"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
import { FluidDiagram } from "./FluidDiagram"
import { metaTokens } from "./tokens.meta"

export const metadata = metaTokens

export default function TokensPage() {
  return (
    <SectionLayout>
      <TextCollection heading={metadata.title?.toString()} subheading="" text="" />

      <ContentSection textCollection={{ subheading: "Farger primitives" }}>
        {Object.entries(tokens.primitives.color).map(([colorCategory, color]) => {
          return (
            <div key={colorCategory}>
              {colorCategory}
              <div className="grid grid-cols-[6rem_1fr]">
                {Object.entries(color).map(([colorName, colorValue]) => (
                  <>
                    <div key={colorName}>{colorName}</div>
                    <div
                      key={colorValue}
                      style={{
                        backgroundColor: colorValue,
                        color: "#ffffff",
                      }}
                    >
                      {colorValue}
                    </div>
                  </>
                ))}
              </div>
            </div>
          )
        })}
      </ContentSection>

      <ContentSection textCollection={{ subheading: "Farger semantics" }}>
        {Object.entries(tokens.semantics.color).map(([semanticCategory, colorCategoryValue]) => {
          return (
            <div>
              {semanticCategory}
              <div>
                {Object.entries(colorCategoryValue).map(([colorCategory, color]) => (
                  <div>
                    {colorCategory}
                    <div className="grid grid-cols-[6rem_1fr]">
                      {Object.entries(color).map(([colorName, colorValue]) => (
                        <>
                          <div>{colorName}</div>
                          <div
                            style={{
                              backgroundColor: colorValue as string,
                              color: "#ffffff",
                            }}
                          >
                            {colorValue as string}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </ContentSection>

      <ContentSection textCollection={{ subheading: "Størrelser" }}>
        <div className="grid grid-cols-[12rem_1fr] gap-2">
          {Object.values(tokens.primitives.size).map((key, i, all) => (
            <>
              <div>primitives.size.{key}</div>
              <div
                style={{
                  width: "100%",
                  overflowY: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  role="img"
                  aria-label={`Illustrasjon som viser størrelse ${key}`}
                  style={{
                    height: "100%",
                    width: (key / all[all.length - 1]) * 100 + "%",
                    backgroundColor: tokens.primitives.color.concrete[325],
                    borderRadius: tokens.semantics.layout.element.radius.medium,
                  }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </ContentSection>

      <ContentSection textCollection={{ subheading: "Former" }}>
        <div className="grid grid-cols-[1fr_auto] gap-20">
          {Object.entries(tokens.semantics.layout.element.radius).map(([key, value]) => (
            <span>
              <div>semantics.layout.element.radius.{key}</div>

              <div
                role="img"
                aria-label={`Illustrasjon som viser form ${key}: ${value}`}
                style={{
                  height: "100px",
                  width: "100px",
                  color: tokens.primitives.color.concrete[25],
                  backgroundColor: tokens.primitives.color.concrete[325],
                  borderRadius: value,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {value} px
              </div>
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection textCollection={{ subheading: "Nivåer" }}>
        <FluidDiagram fluidTokens={tokens.layout.gap} />
      </ContentSection>
    </SectionLayout>
  )
}
