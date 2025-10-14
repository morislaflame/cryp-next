export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/profile/'],
      },
      sitemap: 'https://yourdomain.com/sitemap.xml',
    }
  }