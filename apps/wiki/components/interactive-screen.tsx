import { ReactNode, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type InteractiveScreenProps = {
  key: string;
  children: (mode: Mode) => ReactNode;
  properties: (mode: Mode) => ReactNode;
  footer?: (mode: Mode) => ReactNode;
};

type Mode = "light" | "dark";

export const InteractiveScreen = ({ key, children, properties, footer }: InteractiveScreenProps) => {
  const [mode, setMode] = useState<Mode>("light");
  const bgClass = mode === "light" ? "bg-white" : "bg-wine-750";
  return (
    <div
      className={`w-[733px] max-w-[733px] grid-cols-[389px_1fr] grid gap-[24px] rounded-[16px] p-[8px] bg-white shadow-sm min-h-96`}
    >
      <div className="relative rounded-[16px] flex items-center justify-center gap-[24px] bg-aubergine-25">
        <div
          className={`${bgClass} rounded-[16px] py-[16px] max-w-[309px] w-[309px] h-[107px] max-h-[107px] flex items-center justify-center`}
        >
          {children(mode)}
        </div>
        {footer && <div className="absolute bottom-0">{footer(mode)}</div>}
      </div>
      <div className="grid gap-[24px] py-[24px]">
        <div className="w-[251px] max-w-[251px] px-[24px] grid gap-[24px] h-fit">
          <h4 className="text-text/color/primary/title-s text-title-s">Egenskaper</h4>
          <div className="grid gap-[16px]">{properties(mode)}</div>
        </div>
        <div className="w-[251px] max-w-[251px] px-[24px] grid gap-[12px] h-fit">
          <h4 className="text-text/color/primary/title-s text-title-s">Visning</h4>
          <RadioGroup defaultValue="light" className="grid gap-[16px]">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="light" id={key + "light"} onClick={() => setMode("light")} />
              <Label htmlFor={key + "light"}>For lys bakgrunn</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="dark" id={key + "dark"} onClick={() => setMode("dark")} />
              <Label htmlFor={key + "dark"}>For mørk bakgrunn</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
