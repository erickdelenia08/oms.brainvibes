import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      
      if (isOnLogin) {
        if (isLoggedIn) {
          const role = auth.user.role;
          if (role === 'ADMIN') return Response.redirect(new URL('/admin', nextUrl));
          if (role === 'TUTOR') return Response.redirect(new URL('/tutor', nextUrl));
          if (role === 'PARENT') return Response.redirect(new URL('/parent', nextUrl));
          return Response.redirect(new URL('/', nextUrl));
        }
        return true;
      }
      
      // All other routes require authentication
      if (!isLoggedIn) return false;

      const role = auth.user.role;
      
      // Redirect from root to respective dashboards
      if (nextUrl.pathname === '/') {
        if (role === 'ADMIN') return Response.redirect(new URL('/admin', nextUrl));
        if (role === 'TUTOR') return Response.redirect(new URL('/tutor', nextUrl));
        if (role === 'PARENT') return Response.redirect(new URL('/parent', nextUrl));
      }

      // Role-based route protection
      if (nextUrl.pathname.startsWith('/admin') && role !== 'ADMIN') {
        return Response.redirect(new URL('/', nextUrl));
      }
      if (nextUrl.pathname.startsWith('/tutor') && role !== 'TUTOR') {
        return Response.redirect(new URL('/', nextUrl));
      }
      if (nextUrl.pathname.startsWith('/parent') && role !== 'PARENT') {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
