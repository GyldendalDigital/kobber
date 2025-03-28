"use server"

import { assertValue } from "../utils/assert"

const TOKEN_URL = assertValue(process.env.PNP_TOKEN_URL, "PNP_TOKEN_URL is not set")
const TOKEN_USERNAME = assertValue(process.env.PNP_TOKEN_USERNAME, "PNP_TOKEN_USERNAME is not set")
const TOKEN_PASSWORD = assertValue(process.env.PNP_TOKEN_PASSWORD, "PNP_TOKEN_PASSWORD is not set")
const TOKEN_SCOPE = assertValue(process.env.PNP_TOKEN_SCOPE, "PNP_TOKEN_SCOPE is not set")
const AUTH_HEADER = `Basic ${Buffer.from(`${TOKEN_USERNAME}:${TOKEN_PASSWORD}`).toString("base64")}`

export async function getPnpAccessToken() {
  try {
    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: AUTH_HEADER,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&scope=${TOKEN_SCOPE}`,
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        `Failed to fetch token: ${response.statusText}. Error: ${JSON.stringify(data)}`
      )
    }

    return { token: data.access_token, error: null }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch token"
    console.error("Token fetch error:", err)
    return { token: null, error: errorMessage }
  }
}
