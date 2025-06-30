export const isExternalLink = (href?: string) => href && href.startsWith("http");

export const getFilenameWithoutExtension = (filename: string) => filename.substring(0, filename.lastIndexOf("."));

export const getFileExtension = (filename: string) => filename.substring(filename.lastIndexOf(".") + 1);
