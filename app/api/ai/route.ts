import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });
     return NextResponse.json({ result: response.choices[0].message.content });
  } catch (err) {
    return NextResponse.json({ error: "AI Request failed" }, { status: 500 });
  }
}
