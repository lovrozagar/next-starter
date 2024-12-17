import type { ReactNode } from "react"

type HeadProps = {
	children: ReactNode
	seo: {
		title: string
		description: string
		image: string
		keywords: string
		ogType: string
		ogImage?: string
		ogTitle?: string
		ogDescription?: string
		canonical: string
		robots: "index, follow" | "noindex, follow" | "all"
		twitterImage?: string
		twitterTitle?: string
		twitterDescription?: string
		twitterCardType?: "summary" | "summary_large_image" | "app" | "player"
		twitterSite?: string | null
		author?: string
		noSiteLinksSearchbox?: boolean
		noTranslate?: boolean
		applicationName?: string
		publisher?: string
		generator?: string
		themeColor?: string
		referrer?:
			| "no-referrer"
			| "origin"
			| "origin-when-cross-origin"
			| "strict-origin"
			| "strict-origin-when-cross-origin"
			| "unsafe-url"
	}
}

const Head = (props: HeadProps) => {
	const { children, seo } = props

	const {
		title,
		description,
		image,
		keywords,
		robots,
		canonical,
		author,
		ogType,
		twitterSite,
		applicationName,
		publisher,
		generator,
		referrer,
		ogImage = image,
		ogTitle = title,
		ogDescription = description,
		twitterImage = image,
		twitterTitle = title,
		twitterDescription = description,
		noTranslate = false,
		noSiteLinksSearchbox = false,
		twitterCardType = "summary_large_image",
	} = seo

	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonical} />
			<meta property="og:type" content={ogType} />
			<meta name="robots" content={robots} />
			<link rel="canonical" href={canonical} />
			<meta name="twitter:card" content={twitterCardType} />
			<meta name="twitter:title" content={twitterTitle} />
			<meta name="twitter:description" content={twitterDescription} />
			<meta name="twitter:image" content={twitterImage} />
			{twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
			{author ? <meta name="author" content={author} /> : null}
			{applicationName ? <meta name="application-name" content={applicationName} /> : null}
			{publisher ? <meta name="publisher" content={publisher} /> : null}
			{generator ? <meta name="generator" content={generator} /> : null}
			{referrer ? <meta name="referrer" content={referrer} /> : null}
			{noSiteLinksSearchbox ? <meta name="google" content="nositelinkssearchbox" /> : null}
			{noTranslate ? <meta name="google" content="notranslate" /> : null}
			{children}
		</>
	)
}

export { Head }
