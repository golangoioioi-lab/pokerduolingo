import { defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    // iOS home-screen icon: solid background, no transparency.
    apple: { sizes: [180], padding: 0, resizeOptions: { background: '#0a0a0a' } },
    maskable: { sizes: [512], padding: 0, resizeOptions: { background: '#0a0a0a' } },
  },
  images: ['public/favicon.svg'],
});
