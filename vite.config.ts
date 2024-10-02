import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/miser/',
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Miser Calc',
        short_name: 'Miser',
        description: 'Compare product prices and get the cheaper option.',
        theme_color: '#242424',
        background_color: '#242424',
        display: 'standalone',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable', // <-- New property value `"maskable"`
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // <-- New property value `"maskable"`
          },
          {
            src: 'icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any', // <-- New property value `"maskable"`
          },
        ],
      },
      workbox: {
        // Используем navigateFallback, чтобы приложение работало оффлайн и возвращало index.html при отсутствии интернета
        navigateFallback: 'index.html',

        // Глобальное кэширование всех необходимых ресурсов: HTML, JS, CSS, изображения
        globPatterns: ['**/*.{js,css,html,png,svg,jpg,json}'],

        runtimeCaching: [
          {
            // Кэшируем запросы на получение страниц (HTML)
            urlPattern: ({request}) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 дней
              },
            },
          },
          {
            // Кэшируем JS и CSS файлы
            urlPattern: /.*\.(?:js|css)/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 дней
              },
            },
          },
          {
            // Кэшируем изображения
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 дней
              },
            },
          },
          {
            // Кэшируем API-запросы
            urlPattern: /\/api\/.*\/*.json/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 дней
              },
            },
          },
        ],
      },
    }),
  ],
});
