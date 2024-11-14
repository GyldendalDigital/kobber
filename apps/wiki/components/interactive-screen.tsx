import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type InteractiveScreenProps = {
  level: string
  children: (mode: Mode) => ReactNode
  properties: (mode: Mode) => ReactNode
  footer?: (mode: Mode) => ReactNode
}

type Mode = "light" | "dark"

export const InteractiveScreen = ({
  level,
  children,
  properties,
  footer,
}: InteractiveScreenProps) => {
  const [mode, setMode] = useState<Mode>("light")
  return (
    <div className="p-main">
      <div
        className={`rounded-16 grid min-h-96 w-[733px] max-w-[733px] grid-cols-[389px_1fr] gap-24 bg-white p-8 shadow`}
      >
        <div className="rounded-16 relative flex items-center justify-center gap-24 bg-[#FDF9F9]">
          <div
            className={cn(
              "rounded-16 h-104 max-h-104 flex w-[309px] max-w-[309px] items-center justify-center py-16",
              {
                "bg-white": mode === "light",
                "bg-[#884D5D]": mode === "dark",
              }
            )}
          >
            {children(mode)}
          </div>
          {footer && <div className="absolute bottom-0">{footer(mode)}</div>}
        </div>
        <div className="grid gap-24 py-24">
          <div className="grid h-fit w-[251px] max-w-[251px] gap-24 px-24">
            <h4 className="text-primary-title-s text-[#481125ff]">Egenskaper</h4>
            <div className="grid gap-16">{properties(mode)}</div>
          </div>
          <div className="grid h-fit w-[251px] max-w-[251px] gap-12 px-24">
            <h4 className="text-primary-title-s text-[#481125ff]">Visning</h4>
            <RadioGroup defaultValue="light" className="grid gap-16">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="light"
                  id={level + "light"}
                  onClick={() => setMode("light")}
                />
                <Label htmlFor={level + "light"}>For lys bakgrunn</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dark" id={level + "dark"} onClick={() => setMode("dark")} />
                <Label htmlFor={level + "dark"}>For mørk bakgrunn</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
