import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json("Hello form api");
}
