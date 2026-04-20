import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== process.env.COCKPIT_PASSWORD) {
    return NextResponse.json({ error: "wrong" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("cockpit_auth", process.env.AUTH_SECRET!, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
