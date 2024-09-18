"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContentSection } from "@/components/content-section";
import { InteractiveScreen } from "@/components/interactive-screen";
import { InteractiveScreenProperties } from "@/components/interactive-screen-properties";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function ButtonSection() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  console.log(isDarkMode);

  return (
    <ContentSection
      heading="Primærknapp"
      ingress="Brukes som hovedhandling på en side. Knappen finnes i flere fargeutførelser avhengig av konteksten den brukes i. Identitetsfargen karminrød og lys aubergine er ofte brukt på både lys og mørk bakgrunn. "
    >
      <InteractiveScreen
        properties={<InteractiveScreenProperties setIsDarkMode={setIsDarkMode} properties={<ButtonProperties />} />}
      >
        <Button
          className={cn("", {
            "bg-aubergine-250": isDarkMode,
          })}
        >
          Button <ArrowRight className="size-4 ml-2" />
        </Button>
      </InteractiveScreen>
    </ContentSection>
  );
}

function ButtonProperties() {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}
