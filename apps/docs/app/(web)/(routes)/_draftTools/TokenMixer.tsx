"use client"

import { useEffect, useState } from "react"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react"
import { Settings2Icon } from "lucide-react"
import styles from "./DraftTools.module.css"

export const TokenMixer = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      {show && <TokenOverlay onClose={() => setShow(false)} />}
      <KobberButton variant="brand-primary-main" title="Token mixer" onClick={handleClick}>
        <div slot="icon">
          <Settings2Icon />
        </div>
      </KobberButton>
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
      <div className={styles["token-mixer-wrapper"]}>
        <KobberHeading element="heading" size="small">
          Token mixer
        </KobberHeading>
        <small>
          Endre design tokens live på siden. Trykk save for å huske innstillingene når du lukker
          modalen.
        </small>
        <textarea
          className={styles["token-mixer-code"]}
          value={localCss || defaultCss}
          onChange={(e) => setLocalCss(e.target.value)}
        />
        <div className={styles["token-mixer-controls"]}>
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
