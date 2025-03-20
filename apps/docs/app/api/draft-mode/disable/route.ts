import { draftMode } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const d = await draftMode()
  d.disable()

  return NextResponse.redirect(new URL("/", request.url))
}
