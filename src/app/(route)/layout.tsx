import { ROOT_LAYOUT_METADATA } from "@/app/(route)/seo/metadata"
import { TopLoaderDynamic } from "@/components/top-loader"
import "@/style/globals.css"

import type { ReactNode } from "react"

type RootLayoutProps = {
	children: ReactNode
}

function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang="en">
			<body>
				<TopLoaderDynamic />
				{children}
			</body>
		</html>
	)
}

function generateMetadata() {
	return ROOT_LAYOUT_METADATA
}

export { generateMetadata }

export default RootLayout
