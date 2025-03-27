import { useCallback, useEffect, useMemo, useState } from "react"
import {
  Box,
  Button,
  Card,
  Dialog,
  Grid,
  Spinner,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@sanity/ui"
import { PatchEvent, set, unset } from "sanity"
import { getDamToken } from "../actions/dam"

interface DamAssetInputProps {
  value?: {
    assetId?: string
    name?: string
    previewUrl?: string
  }
  onChange: (patch: PatchEvent) => void
}

const DAM_BASE_URL = "https://dam-prod.gyldendaldigital.no/tenants/edu"
const DAM_SEARCH_URL = `${DAM_BASE_URL}/services/search`
const DAM_SEARCH_STATIC_QUERY_PARAMS = 'assetDomain: (image) AND ancestorPaths: "/Kobber"'

interface DamAsset {
  assetId: string
  name: string
  extension: string
  previewUrl: string
}

type DamAssetResponse = {
  errorcode?: number
  totalHits: number
  hits: {
    id: string
    metadata: {
      name: string
      assetType: string | "jpg" | "png" | "svg"
    }
    previewUrl: string
  }[]
}

const DEBOUNCE_DELAY = 250

export function DamAssetInput(props: DamAssetInputProps) {
  const { value, onChange } = props
  const [assets, setAssets] = useState<DamAsset[]>([])
  const [browseLoading, setBrowseLoading] = useState(true)
  const [manualLoading, setManualLoading] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [manualIdError, setManualIdError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [manualAssetId, setManualAssetId] = useState("")
  const [manualAssetExtension, setManualAssetExtension] = useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [bearerToken, setBearerToken] = useState<string | null>(null)
  const [tokenError, setTokenError] = useState<string | null>(null)

  const fetchToken = useCallback(async () => {
    const { token, error } = await getDamToken()
    if (error) {
      setTokenError(error)
      return null
    }
    setBearerToken(token)
    return token
  }, [])

  // Fetch token when component mounts
  useEffect(() => {
    fetchToken()
  }, [fetchToken])

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const fetchAssets = useCallback(
    async (query: string) => {
      if (!bearerToken) {
        setSearchError("Authentication token not available")
        return []
      }

      try {
        setBrowseLoading(true)
        setSearchError(null)
        const searchParams = new URLSearchParams({
          q: query,
          start: "0",
        })

        const response = await fetch(`${DAM_SEARCH_URL}?${searchParams.toString()}`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })

        if (!response.ok || response.status !== 200) {
          if (response.status === 401) {
            // Token might be expired, try to refresh it
            const newToken = await fetchToken()
            if (newToken) {
              // Retry the request with new token
              const retryResponse = await fetch(`${DAM_SEARCH_URL}?${searchParams.toString()}`, {
                headers: {
                  Authorization: `Bearer ${newToken}`,
                },
              })
              if (!retryResponse.ok) {
                throw new Error("Failed to fetch assets after token refresh")
              }
              const data = await retryResponse.json()
              return transformAssets(data)
            }
          }
          throw new Error("Failed to fetch assets")
        }

        const data = (await response.json()) as DamAssetResponse
        const transformedAssets = transformAssets(data)
        console.log("data", data, "Transformed assets:", transformedAssets)
        setAssets(transformedAssets)
        return transformedAssets
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch assets"
        console.error(err)
        setSearchError(errorMessage)
        return []
      } finally {
        setBrowseLoading(false)
      }
    },
    [bearerToken, fetchToken]
  )

  const createPreviewUrl = (id: string, extension: string) => {
    const endpoint = extension === "svg" ? "file" : "preview"
    return `${DAM_BASE_URL}/${endpoint}/${id}/*/${id}.${extension}`
  }

  const transformAssets = (data: DamAssetResponse): DamAsset[] => {
    return data.hits.map((asset) => ({
      assetId: asset.id,
      name: asset.metadata.name,
      extension: asset.metadata.assetType,
      previewUrl: createPreviewUrl(asset.id, asset.metadata.assetType),
    }))
  }

  useEffect(() => {
    if (isOpen) {
      const query = debouncedSearchQuery ? `name: *${debouncedSearchQuery}*` : "name: *"
      fetchAssets(`${DAM_SEARCH_STATIC_QUERY_PARAMS} AND ${query}`)
    }
  }, [isOpen, debouncedSearchQuery, fetchAssets])

  const handleSelect = useCallback(
    (asset: DamAsset) => {
      onChange(
        PatchEvent.from([
          set(asset.assetId, ["assetId"]),
          set(asset.name, ["name"]),
          set(asset.previewUrl, ["previewUrl"]),
        ])
      )
      setManualAssetId(asset.assetId)
      setIsOpen(false)
    },
    [onChange]
  )

  const handleClear = useCallback(() => {
    onChange(PatchEvent.from([unset(["assetId"]), unset(["name"]), unset(["previewUrl"])]))
    setManualAssetExtension("")
  }, [onChange])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSearchQuery("")
    setManualAssetId("")
    setSearchError(null)
    setManualIdError(null)
  }, [])

  const handleManualAssetIdSubmit = useCallback(async () => {
    if (manualAssetId) {
      setManualLoading(true)
      setManualIdError(null)
      try {
        const assets = await fetchAssets(`id: ${manualAssetId}`)
        if (assets.length > 0) {
          handleSelect(assets[0])
        } else if (manualAssetExtension) {
          handleSelect({
            assetId: manualAssetId,
            name: `Asset ${manualAssetId}.${manualAssetExtension}`,
            previewUrl: createPreviewUrl(manualAssetId, manualAssetExtension),
            extension: manualAssetExtension,
          })
        } else {
          setManualIdError("Asset not found")
        }
      } catch (err) {
        setManualIdError(err instanceof Error ? err.message : "Failed to fetch asset")
      } finally {
        setManualLoading(false)
      }
    }
  }, [manualAssetId, manualAssetExtension, fetchAssets, handleSelect])

  const filteredAssets = useMemo(
    () => assets.filter((asset) => asset.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [assets, searchQuery]
  )

  return (
    <Stack space={4}>
      {tokenError && (
        <Card padding={3} tone="critical">
          <Text>Authentication Error: {tokenError}</Text>
        </Card>
      )}
      <Stack space={2}>
        <Text>Enter asset ID manually:</Text>
        <Stack space={2} style={{ flexDirection: "row" }}>
          <TextInput
            value={manualAssetId}
            onChange={(e) => setManualAssetId(e.currentTarget.value)}
            placeholder="Enter asset ID..."
            disabled={manualLoading}
          />
          <Button
            text={manualLoading ? "Loading..." : "Use ID"}
            onClick={handleManualAssetIdSubmit}
            disabled={!manualAssetId || manualLoading}
            loading={manualLoading}
          />
        </Stack>
        {manualIdError && (
          <>
            Metadata not found. Set correct file extension.
            <TextInput
              value={manualAssetExtension}
              onChange={(e) => setManualAssetExtension(e.currentTarget.value)}
              placeholder="jpg, png, svg..."
            />
          </>
        )}
      </Stack>

      {value?.assetId ? (
        <Card padding={3} tone="positive">
          <Stack space={2}>
            <Text>Selected Asset:</Text>
            <Text>ID: {value.assetId}</Text>
            <Text>Name: {value.name}</Text>
            {value.previewUrl && (
              <img
                src={value.previewUrl}
                alt={value.name || "Preview"}
                style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "contain" }}
              />
            )}
            <Stack space={2} style={{ flexDirection: "row" }}>
              <Button text="Change Selection" onClick={handleOpen} />
              <Button text="Clear Selection" tone="critical" onClick={handleClear} />
            </Stack>
          </Stack>
        </Card>
      ) : (
        <Button text="Browse Assets" onClick={handleOpen} />
      )}

      {isOpen && (
        <Dialog
          header="Select DAM Asset"
          id="dam-asset-dialog"
          onClose={handleClose}
          width={1}
          zOffset={1000}
        >
          <Box padding={4}>
            <Stack space={4}>
              <Stack space={2}>
                <Text>Search by name:</Text>
                <TextInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.currentTarget.value)}
                  placeholder="Enter asset name..."
                  disabled={browseLoading}
                />
              </Stack>

              {browseLoading ? (
                <Stack space={4} style={{ alignItems: "center" }}>
                  <Spinner />
                  <Text>Loading assets...</Text>
                </Stack>
              ) : searchError ? (
                <Stack space={4}>
                  <Text style={{ color: "red" }}>Error: {searchError}</Text>
                </Stack>
              ) : (
                <Grid columns={3} gap={3}>
                  {filteredAssets.map((asset) => (
                    <Tooltip
                      key={asset.assetId}
                      content={
                        <Stack space={2} padding={2}>
                          <Text>ID: {asset.assetId}</Text>
                          <Text>{asset.name}</Text>
                        </Stack>
                      }
                    >
                      <Card
                        padding={2}
                        tone="default"
                        style={{
                          cursor: "pointer",
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                        onClick={() => handleSelect(asset)}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "120px",
                            borderRadius: "6px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={asset.previewUrl}
                            alt={asset.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              backgroundColor: "#f5f5f5",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: "rgba(0, 0, 0, 0.7)",
                            }}
                          >
                            <Text
                              size={1}
                              style={{
                                color: "white",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                padding: "0.7em 0.2em",
                                textAlign: "center",
                              }}
                            >
                              {asset.name}
                            </Text>
                          </div>
                        </div>
                      </Card>
                    </Tooltip>
                  ))}
                </Grid>
              )}
            </Stack>
          </Box>
        </Dialog>
      )}
    </Stack>
  )
}
