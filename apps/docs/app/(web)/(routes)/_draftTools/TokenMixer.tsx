"use client"

import { useEffect, useState } from "react"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Settings2Icon } from "lucide-react"

export const TokenMixer = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      {show && <TokenOverlay onClose={() => setShow(false)} />}
      <KobberButton
        variant="brand-primary-main"
        icon={<Settings2Icon />}
        title="Token mixer"
        onClick={handleClick}
      />
    </>
  )
}

const TokenOverlay = ({ onClose }: { onClose: () => void }) => {
  const [defaultCss, setDefaultCss] = useState("")
  const [localCss, setLocalCss] = useState(sessionStorage.getItem("tokenMixerCss"))

  useEffect(() => {
    fetch("https://esm.sh/@gyldendal/kobber-base/themes/default/tokens.css")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.text()
      })
      .then((cssText) => {
        setDefaultCss(cssText)
      })
      .catch((error) => {
        console.error("Failed to fetch CSS file:", error)
      })
  }, [])

  const handleSaveCss = () => {
    if (localCss) sessionStorage.setItem("tokenMixerCss", localCss)
  }

  const handleResetCss = () => {
    sessionStorage.removeItem("tokenMixerCss")
    setLocalCss(defaultCss)
  }

  return (
    <>
      <style href={"token-mixer" + new Date().toISOString()} precedence="medium">
        {localCss || defaultCss}
      </style>
      <div className="fixed inset-[10vw] flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Token mixer</h2>
          <small className="text-gray-500">
            Endre design tokens live på siden. Trykk save for å huske innstillingene når du lukker
            modalen.
          </small>
        </div>
        <textarea
          className="size-full resize-none rounded-lg border-2 border-gray-300 p-4 font-mono"
          value={localCss || defaultCss}
          onChange={(e) => setLocalCss(e.target.value)}
        />
        <div className="flex gap-4">
          <KobberButton variant="brand-primary-main" onClick={handleSaveCss}>
            Save
          </KobberButton>
          <KobberButton variant="brand-secondary-main" onClick={handleResetCss}>
            Reset
          </KobberButton>
          <KobberButton variant="brand-tertiary-main" onClick={onClose}>
            Close
          </KobberButton>
        </div>
      </div>
    </>
  )
}
