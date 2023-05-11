// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { UserConfig } from 'vite'

const config: UserConfig = {
    optimizeDeps: {
        exclude: [],
        include: ['@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material'],
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    server: {
        open: true,
        port: 5173,
    }
}

export default config
