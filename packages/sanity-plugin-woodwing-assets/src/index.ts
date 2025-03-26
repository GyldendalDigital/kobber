import { definePlugin } from "sanity";
export { WoodWingAssetSource } from "./components/WoodWingAssetSource";
export { woodwingAsset } from "./schemas/woodwingAsset";

export interface WoodWingConfig {
  // WoodWing Assets API endpoint
  apiEndpoint: string;
  // Authentication token or API key
  apiKey?: string;
  // Default interface for asset browsing
  defaultView?: string;
  // Maximum image size (format: WxH)
  imageMaxSize?: string;
  // Culture/language code
  culture?: string;
  // Required metadata fields for upload
  requiredUploadFields?: string[];
  // Default metadata language
  defaultLanguage?: string;
  // Enable multi-language support
  enableMultiLanguage?: boolean;
}

/**
 * WoodWing Assets source plugin for Sanity Studio
 * @public
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {woodwingAssets} from 'sanity-plugin-woodwing-assets'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [
 *     woodwingAssets({
 *       apiEndpoint: 'https://your-woodwing-instance.com/api',
 *       apiKey: 'your-api-key',
 *       imageMaxSize: '2048x2048',
 *       culture: 'en-US'
 *     })
 *   ],
 * })
 * ```
 */
export const woodwingAssets = definePlugin<Partial<WoodWingConfig>>((config = {}) => {
  // Validate required configuration
  if (!config.apiEndpoint) {
    throw new Error("WoodWing Assets plugin requires apiEndpoint configuration");
  }

  // Set default values
  const pluginConfig = {
    apiEndpoint: config.apiEndpoint,
    imageMaxSize: "2048x2048",
    culture: "en-US",
    requiredUploadFields: [],
    defaultLanguage: "en",
    enableMultiLanguage: false,
    ...config,
  } as WoodWingConfig;

  return {
    name: "asset-source-woodwing",
    assetSources: [
      {
        name: "woodwing",
        title: "WoodWing Assets",
        component: {
          name: "woodwing",
          title: "WoodWing Assets",
          accept: "image/*",
          sources: [
            {
              name: "woodwing-assets",
              title: "WoodWing Assets",
              component: () => import("./components/WoodWingAssetSource"),
              options: pluginConfig,
            },
          ],
        },
      },
    ],
  };
});
