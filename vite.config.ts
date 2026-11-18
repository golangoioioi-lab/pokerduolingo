/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'Holdem Lab',
        short_name: 'Holdem Lab',
        description: 'テキサスホールデムの戦略を、短いレッスンと練習で身につける学習アプリ',
        lang: 'ja',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        background_color: '#f4f4f2',
        theme_color: '#f4f4f2',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        navigateFallback: '/index.html',
        // Never cache API / auth traffic.
        navigateFallbackDenylist: [/^\/api\//, /^\/auth/, /^\/functions/],
      },
    }),
  ],
  build: {
    rolldownOptions: {
      output: {
        // Long-lived vendor chunks: app updates do not invalidate the framework download.
        codeSplitting: {
          groups: [
            { name: 'ionic', test: /node_modules[\/](@ionic|ionicons|@stencil)/ },
            { name: 'react', test: /node_modules[\/](react|react-dom|react-router|react-router-dom|scheduler)[\/]/ },
          ],
        },
      },
    },
    // Ionic ships as one large, rarely-changing vendor chunk (~270 kB gzip).
    chunkSizeWarningLimit: 1400,
  },
  worker: { format: 'es' },
  test: { environment: 'node', include: ['src/**/*.test.ts', 'server/**/*.test.ts'] },
});
