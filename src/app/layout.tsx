import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer'
import StoreProvider from '@/store/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Криптообменник - Быстрый и безопасный обмен криптовалют',
    template: '%s | Криптообменник'
  },
  description: 'Обменивайте криптовалюты быстро и безопасно. Лучшие курсы, мгновенные переводы, круглосуточная поддержка.',
  keywords: 'криптообменник, обмен криптовалют, bitcoin, ethereum, быстрый обмен',
  openGraph: {
    title: 'Криптообменник - Быстрый обмен криптовалют',
    description: 'Обменивайте криптовалюты быстро и безопасно',
    type: 'website',
    url: 'https://anonex.ru',
    siteName: 'Криптообменник',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://anonex.ru'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>
          <div className="min-h-screen flex flex-col">
            <div className='w-full flex justify-center items-center lg:pt-8 pt-4 lg:px-8 px-4 z-10'>
              <Navigation />
            </div>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}