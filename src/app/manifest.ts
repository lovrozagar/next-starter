import type { MetadataRoute } from "next"

function manifest() {
	return {
		name: "next-starter",
		short_name: "next-starter",
		description: "next-starter",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	} satisfies MetadataRoute.Manifest
}

export default manifest
