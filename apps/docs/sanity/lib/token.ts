export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  console.warn("Missing SANITY_API_READ_TOKEN")
}
