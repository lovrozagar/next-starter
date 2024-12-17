import type { MetadataRoute } from "next"

/* generate a sitemap.xml static file  */
function sitemap() {
	return [
		{
			url: "https://next-starter.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	] satisfies MetadataRoute.Sitemap
}

export default sitemap
