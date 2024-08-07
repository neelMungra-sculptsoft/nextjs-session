import { NextRequest, NextResponse } from "next/server";
import { getSession, TOKEN_NAME } from "./lib/sessions";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(TOKEN_NAME)?.value;

  if (!token || getSession(token)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
