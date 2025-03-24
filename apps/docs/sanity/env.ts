export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-12"

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "dev"

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3000"
