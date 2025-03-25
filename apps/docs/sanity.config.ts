"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */
import { woodwingAssets } from "@gyldendal/sanity-plugin-woodwing-assets"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { presentationTool } from "sanity/presentation"
import { structureTool } from "sanity/structure"
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { resolve } from "./sanity/presentation/resolve"
import { schemaTypes } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"
import { createPageTemplate } from "./sanity/utils/helper"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: createPageTemplate(),
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    woodwingAssets({
      apiEndpoint: 'https://dam-prod.gyldendaldigital.no/tenants/edu',
      apiKey: 'your-api-key',
      imageMaxSize: '2048x2048',
      culture: 'en-US'
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
})
