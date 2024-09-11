import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		return NextResponse.json({ message: "Hello World" }, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
	}
}
