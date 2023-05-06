// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { UserConfig } from 'vite'

const config: UserConfig = {
    optimizeDeps: {
        exclude: ['@mui/icons-material'],
        include: ['@mui/material', '@emotion/react', '@emotion/styled'],
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
}

export default config
