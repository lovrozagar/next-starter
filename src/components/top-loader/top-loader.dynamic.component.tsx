import dynamic from "next/dynamic"

const TopLoaderDynamic = dynamic(async () =>
	import("@/components/top-loader/top-loader.component").then((module) => module.TopLoader),
)

export { TopLoaderDynamic }
