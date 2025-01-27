import { cookies } from "next/headers"
import { cn } from "@/lib/utils"
import { DarkModeTrigger } from "./dark-mode-trigger"

export default async function Page() {
  const cookieStore = await cookies()
  const mode = cookieStore.get("color-scheme")?.value || "default"

  return (
    <div className={cn("flex h-72 flex-col items-center justify-center")}>
      <DarkModeTrigger mode={mode === "dark" ? "dark" : "default"} />
    </div>
  )
}
