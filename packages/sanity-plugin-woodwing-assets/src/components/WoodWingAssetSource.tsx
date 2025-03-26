import { useCallback, useEffect, useState } from "react";
import { Dialog, Flex, Stack } from "@sanity/ui";
import { WoodWingConfig } from "../";
import { WoodWingClient, WoodWingAsset } from "../client/WoodWingClient";
import { WoodWingAssetBrowser } from "./WoodWingAssetBrowser";

interface WoodWingAssetSourceProps {
  onSelect: (assets: any[]) => void;
  onClose: () => void;
  selectedAssets?: any[];
  options: WoodWingConfig;
}

export const WoodWingAssetSource = ({ onSelect, onClose, selectedAssets = [], options }: WoodWingAssetSourceProps) => {
  const [client, setClient] = useState<WoodWingClient | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Initialize WoodWing client
  useEffect(() => {
    try {
      const woodwingClient = new WoodWingClient(options);
      setClient(woodwingClient);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to initialize WoodWing client"));
    }
  }, [options]);

  const handleSelect = useCallback(
    async (assets: WoodWingAsset[]) => {
      try {
        // Transform WoodWing assets to Sanity format without downloading
        const sanityAssets = assets.map(asset => ({
          _type: "woodwingAsset",
          assetId: asset.id,
          name: asset.name,
          dimensions: asset.width && asset.height ? `${asset.width}x${asset.height}` : undefined,
          size: asset.size,
          previewUrl: asset.previewUrl,
          metadata: asset.metadata,
          hotspot: { x: 0.5, y: 0.5 },
          crop: { top: 0, bottom: 0, left: 0, right: 0 },
        }));

        onSelect(sanityAssets);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to process selected assets"));
      }
    },
    [onSelect],
  );

  if (!client) {
    return (
      <Dialog header="Select Assets from WoodWing" id="woodwing-asset-source" onClose={onClose} width={4}>
        <Flex align="center" justify="center" padding={4}>
          <Stack space={3}>
            {error ? <div>Error: {error.message}</div> : <div>Initializing WoodWing client...</div>}
          </Stack>
        </Flex>
      </Dialog>
    );
  }

  return (
    <Dialog header="Select Assets from WoodWing" id="woodwing-asset-source" onClose={onClose} width={4}>
      <WoodWingAssetBrowser client={client} onSelect={handleSelect} selectedAssets={selectedAssets} />
    </Dialog>
  );
};
