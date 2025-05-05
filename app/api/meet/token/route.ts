import { createToken } from "@/lib/livekit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { identity, room } = await req.json();
  const token = createToken(identity, room);
  return NextResponse.json({ token });
}
