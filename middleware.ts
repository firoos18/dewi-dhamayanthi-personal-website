import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;

    const isCmsRoute = pathname.startsWith("/cms");
    const isCmsLogin = pathname === "/cms/auth";

    if (isCmsRoute && !token) {
      if (!isCmsLogin) {
        return NextResponse.redirect(new URL("/cms/auth?login=true", req.url));
      }
    }

    if (isCmsLogin && token) {
      return NextResponse.redirect(new URL("/cms/", req.url));
    }
  } catch (error) {
    console.error("Middleware error:", error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/blog", "/blog/:path*", "/cms", "/cms/:path*"],
};
