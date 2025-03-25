import { ReactElement } from 'react'
import { WoodWingConfig } from '../'

export interface WoodWingAssetSourceProps {
  onSelect: (assets: any[]) => void
  onClose: () => void
  selectedAssets?: any[]
  options: WoodWingConfig
}

declare const WoodWingAssetSource: React.FC<WoodWingAssetSourceProps>
export default WoodWingAssetSource 