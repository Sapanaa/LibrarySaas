import {auth} from "@/auth"; // this comes from your `...nextauth.ts`
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");

  // Not logged in — block all protected routes
  if (!session && (isAdminRoute || isProtectedRoute)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Admin routes — only allow role === ADMIN
  if (isAdminRoute && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Example: block PENDING users from dashboard
  if (isProtectedRoute && session?.user?.status !== "APPROVED") {
    return NextResponse.redirect(new URL("/pending-approval", request.url));
  }

  return NextResponse.next();
}
