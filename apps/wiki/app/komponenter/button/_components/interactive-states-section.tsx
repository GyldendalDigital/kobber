import { ContentSection } from "@/components/content-section"
import { KobberButton } from "@/components/kobber-ssr-loader"

const states = ["idle", "hover", "active", "focus", "disabled"]
const ingress =
  "Knappens forskjellige stadier er utformet etter størrelsesprinsipper. Det vil si at ved hover så vokser knappen, og når den trykkes på går den ned i størrelse igjen."

export function InteractiveStatesSection() {
  return (
    <ContentSection textCollection={{ heading: "Interaktive stadier", ingress: ingress }}>
      <div className="px-main">
        <div className="w-[736px] max-w-[736px] overflow-hidden rounded-16">
          <div className="flex items-center justify-center gap-24 bg-white px-120 py-40">
            {states.map((state) => (
              <KobberButton
                key={"supplemental" + state}
                color="carmine"
                variant="supplemental"
                level="primary"
                className={state}
                disabled={state === "disabled"}
              >
                <span className="capitalize">{state}</span>
              </KobberButton>
            ))}
          </div>
          <div className="flex items-center justify-center gap-24 bg-aubergine-900 px-120 py-40">
            {states.map((state) => (
              <KobberButton
                key={"main" + state}
                color="carmine"
                variant="main"
                level="primary"
                className={state}
                disabled={state === "disabled"}
              >
                <span className="capitalize">{state}</span>
              </KobberButton>
            ))}
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
