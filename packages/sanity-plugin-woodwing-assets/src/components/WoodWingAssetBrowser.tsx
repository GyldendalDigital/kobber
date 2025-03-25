import React, { useCallback, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  TextInput
} from '@sanity/ui'
import { WoodWingAsset, WoodWingClient, WoodWingSearchParams } from '../client/WoodWingClient'

interface WoodWingAssetBrowserProps {
  client: WoodWingClient
  onSelect: (assets: WoodWingAsset[]) => void
  selectedAssets?: WoodWingAsset[]
}

export function WoodWingAssetBrowser({
  client,
  onSelect,
  selectedAssets = []
}: WoodWingAssetBrowserProps) {
  const [assets, setAssets] = useState<WoodWingAsset[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const pageSize = 20

  const loadAssets = useCallback(async (params: WoodWingSearchParams = {}) => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await client.search({
        ...params,
        page,
        pageSize
      })
      setAssets(response.assets)
      setTotal(response.total)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load assets'))
    } finally {
      setIsLoading(false)
    }
  }, [client, page])

  useEffect(() => {
    loadAssets({ query: searchQuery })
  }, [loadAssets, searchQuery, page])

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    setPage(1)
  }, [])

  const handleAssetClick = useCallback((asset: WoodWingAsset) => {
    const isSelected = selectedAssets.some(a => a.id === asset.id)
    if (isSelected) {
      onSelect(selectedAssets.filter(a => a.id !== asset.id))
    } else {
      onSelect([...selectedAssets, asset])
    }
  }, [onSelect, selectedAssets])

  const handleLoadMore = useCallback(() => {
    setPage(p => p + 1)
  }, [])

  return (
    <Container width={4}>
      <Stack space={4}>
        <Flex align="center" justify="space-between">
          <Heading>WoodWing Assets</Heading>
          <TextInput
            placeholder="Search assets..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ width: '300px' }}
          />
        </Flex>

        {error && (
          <Card padding={3} tone="critical">
            <Text>Error: {error.message}</Text>
          </Card>
        )}

        {isLoading && assets.length === 0 ? (
          <Flex align="center" justify="center" padding={4}>
            <Spinner />
          </Flex>
        ) : (
          <>
            <Grid columns={[2, 3, 4, 5]} gap={3}>
              {assets.map(asset => (
                <Card
                  key={asset.id}
                  padding={2}
                  tone={selectedAssets.some(a => a.id === asset.id) ? 'primary' : 'default'}
                  onClick={() => handleAssetClick(asset)}
                  style={{ cursor: 'pointer' }}
                >
                  <Stack space={2}>
                    {asset.thumbnailUrl ? (
                      <img
                        src={asset.thumbnailUrl}
                        alt={asset.name}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    ) : (
                      <Box
                        style={{
                          width: '100%',
                          height: '150px',
                          backgroundColor: '#f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Text>No preview</Text>
                      </Box>
                    )}
                    <Text size={1} style={{ wordBreak: 'break-word' }}>
                      {asset.name}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>

            {assets.length > 0 && assets.length < total && (
              <Flex justify="center" padding={3}>
                <Button
                  text="Load more"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                />
              </Flex>
            )}
          </>
        )}
      </Stack>
    </Container>
  )
} 