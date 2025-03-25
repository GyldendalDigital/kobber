import React, { useCallback, useEffect, useState } from 'react'
import { Dialog, Flex, Stack } from '@sanity/ui'
import { WoodWingConfig } from '../'
import { WoodWingClient, WoodWingAsset } from '../client/WoodWingClient'
import { WoodWingAssetBrowser } from './WoodWingAssetBrowser'

interface WoodWingAssetSourceProps {
  onSelect: (assets: any[]) => void
  onClose: () => void
  selectedAssets?: any[]
  options: WoodWingConfig
}

export default function WoodWingAssetSource({
  onSelect,
  onClose,
  selectedAssets = [],
  options
}: WoodWingAssetSourceProps) {
  const [client, setClient] = useState<WoodWingClient | null>(null)
  const [error, setError] = useState<Error | null>(null)

  // Initialize WoodWing client
  useEffect(() => {
    try {
      const woodwingClient = new WoodWingClient(options)
      setClient(woodwingClient)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to initialize WoodWing client'))
    }
  }, [options])

  const handleSelect = useCallback(async (assets: WoodWingAsset[]) => {
    try {
      // Transform WoodWing assets to Sanity asset format
      const sanityAssets = await Promise.all(
        assets.map(async asset => {
          // Get the asset preview as a blob
          const previewBlob = await client?.getAssetPreview(asset.id, options.imageMaxSize)

          // Create a Sanity asset reference
          return {
            kind: 'asset',
            value: {
              _type: 'reference',
              _ref: asset.id,
              // Add metadata from WoodWing
              metadata: {
                ...asset.metadata,
                name: asset.name,
                dimensions: asset.width && asset.height ? `${asset.width}x${asset.height}` : undefined,
                size: asset.size,
                previewUrl: asset.previewUrl
              }
            }
          }
        })
      )

      onSelect(sanityAssets)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to process selected assets'))
    }
  }, [client, onSelect, options.imageMaxSize])

  if (!client) {
    return (
      <Dialog
        header="Select Assets from WoodWing"
        id="woodwing-asset-source"
        onClose={onClose}
        width={4}
      >
        <Flex align="center" justify="center" padding={4}>
          <Stack space={3}>
            {error ? (
              <div>Error: {error.message}</div>
            ) : (
              <div>Initializing WoodWing client...</div>
            )}
          </Stack>
        </Flex>
      </Dialog>
    )
  }

  return (
    <Dialog
      header="Select Assets from WoodWing"
      id="woodwing-asset-source"
      onClose={onClose}
      width={4}
    >
      <WoodWingAssetBrowser
        client={client}
        onSelect={handleSelect}
        selectedAssets={selectedAssets}
      />
    </Dialog>
  )
} 