import { ContentSection } from "@/components/content-section";
import { Button } from "@/components/ui/button";

const ingress =
  "Knappens forskjellige stadier er utformet etter størrelsesprinsipper. Det vil si at ved hover så vokser knappen, og når den trykkes på går den ned i størrelse igjen.";

export function InteractiveStatesSection() {
  return (
    <ContentSection heading="Interkative stadier" ingress={ingress}>
      <div className="w-[736px] max-w-[736px] rounded-[16px] overflow-hidden">
        <div className="bg-white py-[40px] px-[120px] flex items-center justify-center gap-[24px]">
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </div>
        <div className="bg-aubergine-900 py-[40px] px-[120px] flex items-center justify-center gap-[24px]">
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </div>
      </div>
    </ContentSection>
  );
}