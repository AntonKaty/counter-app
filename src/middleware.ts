import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next/') || pathname === '/app/page1') {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/app/page1', request.url));
}

export const config = {
  matcher: '/:path*',
};
