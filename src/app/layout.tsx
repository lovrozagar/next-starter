import "@/style/globals.css"

import NextTopLoader from "nextjs-toploader"
import type { ReactNode } from "react"

type RootLayoutProps = {
	children: ReactNode
}

function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang="en">
			<body>
				<NextTopLoader showSpinner={false} />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
