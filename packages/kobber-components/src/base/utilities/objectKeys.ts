export const objectKeys = <T extends {}>(obj: T) => {
  return Object.keys(obj) as (keyof typeof obj)[];
};
