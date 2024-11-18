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

export default RootLayout
