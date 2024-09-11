/** https://developer.mozilla.org/en-US/docs/Glossary/Base64 */
export const bytesToBase64 = (bytes: Uint8Array) => {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};
