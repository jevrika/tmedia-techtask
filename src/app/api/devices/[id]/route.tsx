import { NextResponse } from "next/server";

export async function GET(_: any, { params }: { params: { id: number } }) {
  const response = await fetch(`http://localhost:4000/devices/${params.id}`)

  const device = await response.json()

  return NextResponse.json(device)
}