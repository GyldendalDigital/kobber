"use client"

import { useState } from "react"
import { KobberButton } from "@gyldendal/kobber-components/react"
import { Settings } from "@gyldendal/kobber-icons/react-ssr-safe"
import { VisualEditing } from "next-sanity"
import { DarkModeTrigger } from "./DarkModeTrigger"
import styles from "./DraftTools.module.css"
import { TokenMixer } from "./TokenMixer"

type Props = {
  pageId?: string
}

export const DraftTools = ({ pageId }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles["panel"]}>
        {open && (
          <>
            <DarkModeTrigger />
            <TokenMixer />
            <KobberButton
              variant="vacation-primary-main"
              title="Åpne studio"
              href={pageId ? `/studio/structure/page;${pageId}` : "/studio/structure/homePage"}
            >
              <div slot="icon">
                <SanityLogo />
              </div>
            </KobberButton>
          </>
        )}

        <KobberButton
          className={styles["trigger"]}
          variant="brand-secondary-main"
          onClick={() => setOpen(!open)}
          title={`${open ? "Lukk" : "Åpne"} draft tools`}
        >
          <Settings slot="icon" />
        </KobberButton>
      </div>

      <VisualEditing />
    </>
  )
}

const SanityLogo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="100%"></rect>
    <path
      d="M10.1637 8.5498C10.1637 11.3854 11.9461 13.0725 15.5143 13.9622L19.2955 14.8235C22.6725 15.5855 24.729 17.4783 24.729 20.5619C24.7553 21.9053 24.3107 23.2168 23.4698 24.2765C23.4698 21.1999 21.8499 19.5376 17.9425 18.538L14.2299 17.7086C11.257 17.0423 8.9623 15.4863 8.9623 12.1368C8.94666 10.8433 9.36932 9.58143 10.1637 8.5498Z"
      fill="white"
    ></path>
    <path
      d="M21.1463 19.8069C22.7591 20.8206 23.4662 22.2384 23.4662 24.2729C22.1313 25.953 19.7861 26.8958 17.0297 26.8958C12.3899 26.8958 9.1427 24.6521 8.42111 20.7533H12.8769C13.4506 22.5432 14.9695 23.3726 16.9972 23.3726C19.4722 23.3726 21.1175 22.0753 21.1499 19.7998"
      fill="#F8B1AA"
    ></path>
    <path
      d="M12.4801 12.7536C11.7436 12.3236 11.1394 11.7057 10.7316 10.9656C10.3238 10.2255 10.1276 9.3907 10.1638 8.54984C11.4518 6.88396 13.6923 5.8667 16.4235 5.8667C21.1499 5.8667 23.8848 8.31945 24.5595 11.7717H20.2732C19.8006 10.4107 18.6172 9.35089 16.4596 9.35089C14.1541 9.35089 12.5811 10.6694 12.4909 12.7536"
      fill="#F8B1AA"
    ></path>
  </svg>
)
