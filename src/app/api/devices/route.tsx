import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch('http://localhost:4000/devices')

  const devices = await response.json()

  return NextResponse.json(devices)
}