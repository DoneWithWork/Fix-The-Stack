import { createJiti } from 'jiti'
import nextra from 'nextra'

const jiti = createJiti(import.meta.url)

await jiti.import('./src/lib/env/client')
await jiti.import('./src/lib/env/server')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
  allowedDevOrigins: [
    'https://relaxed-solely-parrot.ngrok-free.app/',
    'localhost:3000',
  ],

}

export default nextConfig
