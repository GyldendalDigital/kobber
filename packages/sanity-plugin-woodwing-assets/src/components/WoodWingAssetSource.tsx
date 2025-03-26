import React, { useState, useEffect } from 'react'
import { AssetSourceComponentProps, AssetFromSource } from 'sanity'
import { WoodWingConfig } from '..'
import { WoodWingClient } from '../client/WoodWingClient'

interface WoodWingAssetData {
  id: string
  name: string
  previewUrl: string
  dimensions: string
  size: number
  metadata: Record<string, any>
}

interface WoodWingAssetSourceProps extends AssetSourceComponentProps {
  options?: WoodWingConfig
}

export function WoodWingAssetSource({ onSelect, onClose, options }: WoodWingAssetSourceProps) {
  const [assets, setAssets] = useState<WoodWingAssetData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [client, setClient] = useState<WoodWingClient | null>(null)

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        // TODO: Replace with actual WoodWing API call
        const response = await fetch('/api/woodwing-assets')
        const data = await response.json()
        setAssets(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch assets')
      } finally {
        setLoading(false)
      }
    }

    fetchAssets()
  }, [])

  useEffect(() => {
    try {
      const woodwingClient = new WoodWingClient(options || {
        apiEndpoint: 'https://dam-prod.gyldendaldigital.no/tenants/edu',
        apiKey: 'your-api-key',
        imageMaxSize: '2048x2048',
        culture: 'en-US'
      })
      setClient(woodwingClient)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize WoodWing client')
    }
  }, [options])

  const handleSelect = (asset: WoodWingAssetData) => {
    const [width, height] = asset.dimensions.split('x').map(Number)
    const assetFromSource: AssetFromSource = {
      kind: 'url',
      value: asset.previewUrl,
      assetDocumentProps: {
        _type: 'sanity.imageAsset',
        _id: `image-${asset.id}`,
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: '1',
        url: asset.previewUrl,
        path: `images/${asset.id}`,
        assetId: asset.id,
        extension: 'jpg',
        mimeType: 'image/jpeg',
        sha1hash: asset.id,
        size: asset.size,
        metadata: {
          _type: 'sanity.imageMetadata',
          dimensions: {
            _type: 'sanity.imageDimensions',
            width,
            height,
            aspectRatio: width / height
          },
          lqip: asset.previewUrl,
          palette: {
            _type: 'sanity.imagePalette',
            darkMuted: { _type: 'sanity.imagePaletteSwatch', background: '#000000', foreground: '#ffffff', population: 0 },
            darkVibrant: { _type: 'sanity.imagePaletteSwatch', background: '#000000', foreground: '#ffffff', population: 0 },
            dominant: { _type: 'sanity.imagePaletteSwatch', background: '#000000', foreground: '#ffffff', population: 0 },
            lightMuted: { _type: 'sanity.imagePaletteSwatch', background: '#ffffff', foreground: '#000000', population: 0 },
            lightVibrant: { _type: 'sanity.imagePaletteSwatch', background: '#ffffff', foreground: '#000000', population: 0 },
            muted: { _type: 'sanity.imagePaletteSwatch', background: '#000000', foreground: '#ffffff', population: 0 },
            vibrant: { _type: 'sanity.imagePaletteSwatch', background: '#000000', foreground: '#ffffff', population: 0 }
          },
          hasAlpha: false,
          isOpaque: true
        },
        originalFilename: asset.name,
        label: asset.name,
        source: {
          name: 'woodwing',
          id: asset.id
        }
      }
    }
    onSelect([assetFromSource])
  }

  if (loading) return <div>Loading assets...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="woodwing-asset-source">
      <div className="woodwing-asset-grid">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="woodwing-asset-item"
            onClick={() => handleSelect(asset)}
          >
            <img src={asset.previewUrl} alt={asset.name} />
            <div className="woodwing-asset-info">
              <h3>{asset.name}</h3>
              <p>{asset.dimensions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
