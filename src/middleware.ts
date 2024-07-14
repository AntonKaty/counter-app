import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== '/app/page1') {
    return NextResponse.redirect(new URL('/app/page1', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
