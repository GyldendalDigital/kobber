"use server"

import { db } from "@/drizzle/drizzle"
import { visitors } from "@/drizzle/schema"
import { getIp } from "@/lib/get-ip"

export async function VisitorCount() {
  const ip = await getIp()

  if (ip) {
    await db.insert(visitors).values({ ip })
  }

  return null
}
