import type { MetadataRoute } from "next"

/* generate a robots.txt static file  */
function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://next-starter/sitemap.xml",
	} satisfies MetadataRoute.Robots
}

export default robots
