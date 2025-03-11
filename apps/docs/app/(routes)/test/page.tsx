import React from "react"
import Image from "next/image"
import { KobberLabel } from "@gyldendal/kobber-components/react-ssr-safe"
import { Card } from "@/components/ui/card"

export default function TestPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-y-4">
        Kobber label
        <Card className="w-56 space-y-4 p-4">
          <KobberLabel variant="main" theme="rettsdata" showStatusCircle>
            Label text
          </KobberLabel>

          <div>
            <h1>title</h1>
            <h2>Subtitle</h2>
          </div>
        </Card>
      </div>
    </div>
  )
}
