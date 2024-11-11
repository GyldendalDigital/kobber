"use client"

import {
  KobberAccordion,
  KobberArticleWrapper,
  KobberBody,
  KobberBoxLayout,
  KobberButton,
  KobberCardLayout,
  KobberCardLayoutColumnAspectRatio,
  KobberDivider,
  KobberGrid,
  KobberGridColumnAspectRatio,
  KobberIngress,
  KobberList,
  KobberListItem,
} from "@gyldendal/kobber-components/react"

/**
 * Wraps all kobber components in a "use client" file to prevent SSR errors.
 */
export {
  KobberButton as Button,
  KobberBoxLayout as BoxLayout,
  KobberCardLayout as CardLayout,
  KobberCardLayoutColumnAspectRatio as CardLayoutColumnAspectRatio,
  KobberDivider as Divider,
  KobberAccordion as Accordion,
  KobberList as List,
  KobberListItem as ListItem,
  KobberGrid as Grid,
  KobberGridColumnAspectRatio as GridColumnAspectRatio,
  KobberArticleWrapper as ArticleWrapper,
  KobberBody as Body,
  KobberIngress as Ingress,
}
