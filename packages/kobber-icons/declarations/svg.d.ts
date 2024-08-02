declare module "assets/*.svg" {
  type SpriteSymbol = {
    id: string;
  };
  const defaultExport: SpriteSymbol;
  export default defaultExport;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
