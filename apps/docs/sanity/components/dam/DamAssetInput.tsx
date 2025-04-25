import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Select,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@sanity/ui"
import { PatchEvent, set, unset } from "sanity"
import { getPnpAccessToken } from "../../actions/accessTokenClient"
import { searchAssets } from "./damClient"
import { buildSearchQuery, createPreviewUrl, DamAsset } from "./damUtils"

type DamAssetInputProps = {
  value?: {
    assetId?: string
    name?: string
    previewUrl?: string
    inline?: boolean
  }
  onChange: (patch: PatchEvent) => void
}

export function DamAssetInput(props: DamAssetInputProps) {
  const { value, onChange } = props
  const [assets, setAssets] = useState<DamAsset[] | undefined>()
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [searchInput, setSearchInput] = useState("")
  const [manualAssetExtension, setManualAssetExtension] = useState("png")
  const [bearerToken, setBearerToken] = useState<string | null>(null)
  const [tokenError, setTokenError] = useState<string | null>(null)

  const fetchToken = useCallback(async () => {
    const { token, error } = await getPnpAccessToken()
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

  const fetchAssets = useCallback(
    async (searchText: string) => {
      if (!bearerToken) {
        setSearchError("Authentication token not available")
        return []
      }

      try {
        setSearchLoading(true)
        setSearchError(null)
        const { assets, error } = await searchAssets(buildSearchQuery(searchText), bearerToken)

        if (error) {
          setSearchError(error)
          return []
        }

        setAssets(assets)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch assets"
        console.error(err)
        setSearchError(errorMessage)
        return []
      } finally {
        setSearchLoading(false)
      }
    },
    [bearerToken]
  )

  const handleSearch = useCallback(() => {
    if (searchInput) {
      fetchAssets(searchInput)
    }
  }, [searchInput, fetchAssets])

  const handleSelect = useCallback(
    (asset: DamAsset) => {
      onChange(
        PatchEvent.from([
          set(asset.assetId, ["assetId"]),
          set(asset.name, ["name"]),
          set(asset.previewUrl, ["previewUrl"]),
        ])
      )
    },
    [onChange]
  )

  const handleManualSave = useCallback(() => {
    handleSelect({
      assetId: searchInput,
      name: `Asset_${searchInput}.${manualAssetExtension}`,
      previewUrl: createPreviewUrl(searchInput, manualAssetExtension),
      extension: manualAssetExtension,
    })
  }, [handleSelect, searchInput, manualAssetExtension])

  const handleClear = useCallback(() => {
    onChange(
      PatchEvent.from([
        unset(["assetId"]),
        unset(["name"]),
        unset(["previewUrl"]),
        unset(["inline"]),
      ])
    )
    setAssets(undefined)
  }, [onChange])

  const filteredAssets = useMemo(
    () =>
      assets?.filter(
        (asset) =>
          asset.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          asset.assetId.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [assets, searchInput]
  )

  if (value?.assetId) {
    return (
      <div
        style={{ paddingBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <AssetCard
          asset={value as DamAsset}
          onClick={handleClear}
          onHover={(asset) => (
            <>
              <Text style={{ textAlign: "center" }}>Click to clear</Text>
            </>
          )}
        />
        <small>Id: {value.assetId}</small>
        <Flex align="center">
          <Checkbox
            id="checkbox"
            style={{ display: "block" }}
            checked={value.inline}
            onClick={() => onChange(PatchEvent.from([set(!value.inline, ["inline"])]))}
          />
          <Box flex={1} paddingLeft={3}>
            <Text>
              <label htmlFor="checkbox">50% bredde</label>
            </Text>
          </Box>
        </Flex>
      </div>
    )
  }

  return (
    <Stack space={4}>
      {tokenError && (
        <Card padding={3} tone="critical">
          <Text>Authentication error: {tokenError}</Text>
        </Card>
      )}
      <Stack space={2}>
        <Text>DAM search</Text>
        <Stack space={2} style={{ flexDirection: "row" }}>
          <TextInput
            value={searchInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch()
              }
            }}
            onChange={(e) => setSearchInput(e.currentTarget.value)}
            placeholder="id or name"
          />
          <Button
            text={searchLoading ? "Loading..." : "Search"}
            onClick={handleSearch}
            disabled={!searchInput || searchLoading}
            loading={searchLoading}
          />
        </Stack>
      </Stack>

      {searchLoading ? null : searchError ? (
        <Stack space={4}>
          <Text style={{ color: "red" }}>Error: {searchError}</Text>
        </Stack>
      ) : !filteredAssets ? null : filteredAssets.length > 0 ? (
        <Grid columns={3} gap={3}>
          {filteredAssets.map((asset) => (
            <AssetCard
              key={asset.assetId}
              asset={asset}
              onClick={handleSelect}
              onHover={(asset) => <Text>ID: {asset.assetId}</Text>}
            />
          ))}
        </Grid>
      ) : (
        <>
          Metadata not found. If you are certain the asset exists, you can set the correct file
          extension and save:
          <Grid columns={2} gap={2}>
            <Select
              value={manualAssetExtension}
              onChange={(e) => setManualAssetExtension(e.currentTarget.value)}
            >
              <option>png</option>
              <option>jpg</option>
              <option>svg</option>
            </Select>
            <Button
              text="Save"
              onClick={handleManualSave}
              disabled={!manualAssetExtension || !searchInput}
            />
          </Grid>
        </>
      )}
    </Stack>
  )
}

const AssetCard = ({
  asset,
  onClick,
  onHover,
}: {
  asset: DamAsset
  onClick?: (asset: DamAsset) => void
  onHover?: (asset: DamAsset) => ReactNode
}) => {
  return (
    <Tooltip
      key={asset.assetId}
      arrow
      animate
      content={
        <Stack space={2} padding={2}>
          {onHover && onHover(asset)}
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
        onClick={() => onClick && onClick(asset)}
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
  )
}
