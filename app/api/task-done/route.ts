import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = "6226792669";

export async function POST(request: NextRequest) {
  const { task, category } = await request.json();

  if (TELEGRAM_BOT_TOKEN) {
    const msg = `✅ Tâche validée par Clément\n${category === "business" ? "💼" : "🏠"} ${task}`;
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg }),
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
