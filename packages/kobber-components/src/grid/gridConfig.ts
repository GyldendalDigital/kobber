import { getCardGridBase } from "./gridConfig/getCardGridBase";
import { GridConfig } from "./gridConfig/types";

const getCardGridConfig = (): GridConfig => {
  const cardGridBase = getCardGridBase({
    maxColumns: 4,
    aspectRatioHeight: 1.15,
  });
  return {
    ...cardGridBase,
    id: "cardGrid",
  };
};

const getTallCardGridConfig = (): GridConfig => {
  const cardGridBase = getCardGridBase({
    maxColumns: 5,
    aspectRatioHeight: 2,
  });
  return {
    ...cardGridBase,
    id: "tallCardGrid",
  };
};

export const gridConfigs: Record<string, GridConfig> = {
  cardGrid: getCardGridConfig(),
  tallCardGrid: getTallCardGridConfig(),
};
