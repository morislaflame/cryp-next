import { Metadata } from 'next'
import ExchangePageClient from '@/components/ExchangePageClient'

export const metadata: Metadata = {
  title: 'Обменник криптовалют - Быстрый обмен USDT, BTC, ETH',
  description: 'Обменивайте криптовалюты быстро и безопасно. Лучшие курсы, мгновенные переводы, круглосуточная поддержка.',
  keywords: 'криптообменник, обмен криптовалют, bitcoin, ethereum, быстрый обмен',
  robots: {
    index: true,
    follow: true,
  }
}

export default function ExchangePage() {
  return <ExchangePageClient />
}
