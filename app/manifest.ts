import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Engage',
    short_name: 'Engage',
    description: 'Le jeu de société de Mme. Membré.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}