import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !!req.auth
  const role = req.auth?.user?.role

  // ==========================================
  // 1. ROOT "/" 
  // ==========================================

  if (pathname === "/") {
    // Belum login → login
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // Sudah login → dashboard sesuai role
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url))
    }

    if (role === "TUTOR") {
      return NextResponse.redirect(new URL("/tutor", req.url))
    }

    if (role === "PARENT") {
      return NextResponse.redirect(new URL("/parent", req.url))
    }
  }

  // ==========================================
  // 2. LOGIN
  // ==========================================

  // Kalau sudah login dan mencoba buka /login,
  // arahkan ke dashboard masing-masing
  if (pathname === "/login" && isLoggedIn) {
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url))
    }

    if (role === "TUTOR") {
      return NextResponse.redirect(new URL("/tutor", req.url))
    }

    if (role === "PARENT") {
      return NextResponse.redirect(new URL("/parent", req.url))
    }
  }

  // ==========================================
  // 3. PROTECTED ROUTES
  // ==========================================

  const protectedPaths = ["/admin", "/tutor", "/parent"]

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  // Belum login → login
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", req.url)

    // Optional: simpan halaman tujuan
    loginUrl.searchParams.set("callbackUrl", pathname)

    return NextResponse.redirect(loginUrl)
  }

  // ==========================================
  // 4. ROLE AUTHORIZATION
  // ==========================================

  if (isLoggedIn) {
    // ADMIN
    if (pathname.startsWith("/admin") && role !== "ADMIN") {
      return redirectToDashboard(req, role)
    }

    // TUTOR
    if (pathname.startsWith("/tutor") && role !== "TUTOR") {
      return redirectToDashboard(req, role)
    }

    // PARENT
    if (pathname.startsWith("/parent") && role !== "PARENT") {
      return redirectToDashboard(req, role)
    }
  }

  return NextResponse.next()
})


// ==========================================
// Helper: redirect berdasarkan role
// ==========================================

function redirectToDashboard(
  req: Request,
  role: string | undefined
) {
  if (role === "ADMIN") {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  if (role === "TUTOR") {
    return NextResponse.redirect(new URL("/tutor", req.url))
  }

  if (role === "PARENT") {
    return NextResponse.redirect(new URL("/parent", req.url))
  }

  return NextResponse.redirect(new URL("/login", req.url))
}


export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}