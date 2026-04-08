

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private']
    },
    sitemap: `${process.env.API_BASE_URL/sitemap.js}`
  }
}