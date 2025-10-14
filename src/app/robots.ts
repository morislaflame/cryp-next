export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/profile/'],
      },
      sitemap: 'https://anonex.ru/sitemap.xml',
    }
  }