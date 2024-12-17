import type { Product, WithContext } from "schema-dts"

const jsonLd: WithContext<Product> = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Next.js Sticker",
	image: "https://nextjs.org/imgs/sticker.png",
	description: "Dynamic at the speed of static.",
}

export { jsonLd }
