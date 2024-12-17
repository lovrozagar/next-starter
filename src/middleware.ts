import { type NextRequest, NextResponse } from "next/server"

function safeURL(url: URL | string): URL | null {
	try {
		return new URL(url)
	} catch {
		return null
	}
}

function verifyRequestOrigin(origin: string, allowedDomains: string[]): boolean {
	if (!origin || allowedDomains.length === 0) return false
	const originHost = safeURL(origin)?.host ?? null
	if (!originHost) return false
	for (const domain of allowedDomains) {
		let host: string | null
		if (domain.startsWith("http://") || domain.startsWith("https://")) {
			host = safeURL(domain)?.host ?? null
		} else {
			host = safeURL(`https://${domain}`)?.host ?? null
		}
		if (originHost === host) return true
	}
	return false
}

/* CSRF protection */
export async function middleware(request: NextRequest) {
	if (request.method === "GET") {
		return NextResponse.next()
	}

	const originHeader = request.headers.get("Origin")

	/* check both `X-Forwarded-Host` and `Host` headers */
	const hostHeader = request.headers.get("X-Forwarded-Host") ?? request.headers.get("Host")

	if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
		return new NextResponse(null, { status: 403 })
	}

	return NextResponse.next()
}

const config = {
	/* Skip all non-content paths */
	matcher: [
		"/((?!api|_next|favicon|images|fonts|.well-known|pwa-sw.js|robots|_not-found|sitemap|site.webmanifest).*)",
	],
}

export { config }
