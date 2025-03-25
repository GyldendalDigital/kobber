# Sanity Plugin: WoodWing Assets

This plugin integrates WoodWing Assets DAM with Sanity Studio, allowing you to search, preview and import assets directly from WoodWing into your Sanity content.

## Installation

```bash
npm install @gyldendal/sanity-plugin-woodwing-assets
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {woodwingAssets} from '@gyldendal/sanity-plugin-woodwing-assets'

export default defineConfig({
  // ...
  plugins: [
    woodwingAssets({
      apiEndpoint: 'https://your-woodwing-instance.com/api',
      apiKey: 'your-api-key',
      imageMaxSize: '2048x2048',
      culture: 'en-US'
    })
  ],
})
```

## Configuration

The plugin accepts the following configuration options:

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| apiEndpoint | string | Yes | The URL of your WoodWing Assets API endpoint |
| apiKey | string | No | Your WoodWing Assets API key for authentication |
| defaultView | string | No | The default interface for asset browsing |
| imageMaxSize | string | No | Maximum image size (format: WxH). Default: '2048x2048' |
| culture | string | No | Culture/language code. Default: 'en-US' |
| requiredUploadFields | string[] | No | Required metadata fields for upload |
| defaultLanguage | string | No | Default metadata language. Default: 'en' |
| enableMultiLanguage | boolean | No | Enable multi-language support. Default: false |

## Features

- Browse and search WoodWing Assets directly from Sanity Studio
- Preview assets before importing
- Import assets with metadata
- Multi-language support
- Customizable interface

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run watch

# Build for production
npm run build
```

## License

MIT © Gyldendal
