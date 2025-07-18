import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/', '/api/webhooks(.*)', '/docs'])
const isAdminRoute = createRouteMatcher(['/superadmin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    if (isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== 'superadmin') {
        const url = new URL('/', req.url)
        return NextResponse.redirect(url)
    }
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}