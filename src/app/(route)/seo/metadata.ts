import { env } from "@/env/env.mjs"
import type { Metadata } from "next"

const ROOT_LAYOUT_METADATA: Metadata = {
	alternates: {
		canonical: "/",
	},
	// description: t("meta.recommend.description"),
	icons: {
		apple: {
			sizes: "180x180",
			url: "/favicon/apple-touch-icon.png",
		},
		icon: [
			{
				sizes: "16x16",
				type: "image/png",
				url: "/favicon/favicon-16x16.png",
			},
			{
				sizes: "32x32",
				type: "image/png",
				url: "/favicon/favicon-32x32.png",
			},
		],
		other: {
			rel: "mask-icon",
			url: "/favicon/safari-pinned-tab.svg",
		},
		shortcut: "/favicon/favicon.ico",
	},
	manifest: "/site.webmanifest",
	metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
	// openGraph: {
	// 	description: t("meta.recommend.description"),
	// 	images: [
	// 		{
	// 			height: 635,
	// 			url: `${envClient.NEXT_PUBLIC_FRONTEND_URL}/images/common/OpenGraph.png`,
	// 			width: 1200,
	// 		},
	// 	],
	// 	locale: "en",
	// 	siteName: "Recommend",
	// 	title: t("meta.recommend.title"),
	// 	type: "website",
	// 	url: `/${removeTrailingSlash(pathname || "")}`,
	// },
	// other: {
	// 	google: "notranslate",
	// },
	// title: {
	// 	default: t("meta.recommend.title"),
	// 	template: "%s | Recommend",
	// },
	twitter: {
		card: "summary_large_image",
	},
}

export { ROOT_LAYOUT_METADATA }
