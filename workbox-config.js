const { generateSW } = require('workbox-build')

generateSW({
  globDirectory: 'build/',
  globPatterns: ['**/*.{json,js,css,html,png,ico}'],
  swDest: 'build/sw.js',
  clientsClaim: true,
  skipWaiting: true,
})
