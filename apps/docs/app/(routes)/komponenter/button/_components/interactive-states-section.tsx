import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentSection } from "@/components/content-section"

const states = ["idle", "hover", "active", "focus", "disabled"]
const ingress =
  "Knappens forskjellige stadier er utformet etter størrelsesprinsipper. Det vil si at ved hover så vokser knappen, og når den trykkes på går den ned i størrelse igjen."

export function InteractiveStatesSection() {
  return (
    <ContentSection textCollection={{ heading: "Interaktive stadier", ingress: ingress }}>
      <div className="px-0">
        <div className="w-[736px] max-w-[736px] overflow-hidden rounded-2xl">
          <div className="flex items-center justify-center gap-24 bg-white px-96 py-40">
            {states.map((state) => (
              <KobberButton
                key={"supplemental" + state}
                variant="brand-primary-supplemental"
                className={state}
                disabled={state === "disabled"}
              >
                <span className="capitalize">{state}</span>
              </KobberButton>
            ))}
          </div>
          <div className="flex items-center justify-center gap-24 bg-[#330314] px-96 py-40">
            {states.map((state) => (
              <KobberButton
                key={"main" + state}
                variant="brand-primary-main"
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
