"use client";
import { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type InteractiveScreenPropertiesProps = {
  properties: ReactNode;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export function InteractiveScreenProperties({ properties, setIsDarkMode }: InteractiveScreenPropertiesProps) {
  return (
    <div className="grid gap-[24px] py-[24px]">
      <div className="w-[251px] max-w-[251px] px-[24px] grid gap-[24px] h-fit">
        <h4 className="text-text/color/primary/title-s text-title-s">Egenskaper</h4>
        <div className="grid gap-[16px]">{properties}</div>
      </div>
      <div className="w-[251px] max-w-[251px] px-[24px] grid gap-[24px] h-fit">
        <h4 className="text-text/color/primary/title-s text-title-s">Visning</h4>
        <RadioGroup defaultValue="LightMode" className="grid gap-[16px]">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="lightMode" id="lightMode" onClick={() => setIsDarkMode(false)} />
            <Label htmlFor="lightMode">For lys bakgrunn</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="darkMode" id="darkMode" onClick={() => setIsDarkMode(true)} />
            <Label htmlFor="darkMode">For mørk bakgrunn</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
