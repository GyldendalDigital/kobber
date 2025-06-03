export const isExternalLink = (href?: string) => href && href.startsWith("http");

export const pascalCaseToKebab = (pascalString: string) => {
  return pascalString.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
};

export const getFilenameWithoutExtension = (filename: string) => filename.substring(0, filename.lastIndexOf("."));

export const getFileExtension = (filename: string) => filename.substring(filename.lastIndexOf(".") + 1);
