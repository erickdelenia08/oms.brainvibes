import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPaths = ["/admin", "/tutor", "/parent"]

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { pathname } = req.nextUrl

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", req.url)
    return NextResponse.redirect(loginUrl)
  }

  if (isLoggedIn) {
    const role = req.auth?.user?.role

    if (pathname === "/" || pathname === "/login") {
      if (role === "ADMIN") return NextResponse.redirect(new URL("/admin", req.url))
      if (role === "TUTOR") return NextResponse.redirect(new URL("/tutor", req.url))
      if (role === "PARENT") return NextResponse.redirect(new URL("/parent", req.url))
    }

    if (pathname.startsWith("/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url))
    }
    if (pathname.startsWith("/tutor") && role !== "TUTOR") {
      return NextResponse.redirect(new URL("/", req.url))
    }
    if (pathname.startsWith("/parent") && role !== "PARENT") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
});


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
