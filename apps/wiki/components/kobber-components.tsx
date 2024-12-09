"use client"

// switch to "./kobber-components-ssr" to test server side rendering
import { PropsWithChildren } from "react"
import { ArticleWrapperVanilla } from "@gyldendal/kobber-components/vanilla"
import {
  Accordion,
  // ArticleWrapper,
  Body,
  BoxLayout,
  Button,
  CardLayout,
  CardLayoutColumnAspectRatio,
  Divider,
  Grid,
  Ingress,
  List,
  ListItem,
} from "./kobber-components-csr"

const ArticleWrapper = ({ children }: PropsWithChildren) => {
  ArticleWrapperVanilla.jsFunction()

  return (
    <div>
      {/* CSS module test */}
      <div data-test="1" className={ArticleWrapperVanilla.cssModule.articleWrapper}>
        {children}
      </div>

      {/* CSS lit test */}
      <div data-test="2">
        <style>{ArticleWrapperVanilla.cssLit.cssText}</style>
        {children}
      </div>
    </div>
  )
}

/**
 * Wraps all kobber components in a "use client" file to prevent SSR errors.
 */
export {
  Accordion,
  ArticleWrapper,
  Body,
  BoxLayout,
  Button,
  CardLayout,
  CardLayoutColumnAspectRatio,
  Divider,
  Grid,
  Ingress,
  List,
  ListItem,
}
