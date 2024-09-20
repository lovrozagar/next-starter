/* Keep relative imports in this file */

import { createEnv } from '@t3-oss/env-nextjs'

const env = createEnv({
	server: {},
	client: {},
	runtimeEnv: {},
})

export { env }