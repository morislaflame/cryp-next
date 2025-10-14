import { Metadata } from 'next'
import HeroSection from '@/components/HomePageComponents/HeroSection'
import UTPSection from '@/components/HomePageComponents/UTPSection'
import AdvantagesSection from '@/components/HomePageComponents/AdvantagesSection'
import ProcessSection from '@/components/HomePageComponents/ProcessSection'
import RatesSection from '@/components/HomePageComponents/RatesSection'
import ReviewsSection from '@/components/HomePageComponents/ReviewsSection'
import AboutSection from '@/components/HomePageComponents/AboutSection'
import ContactSection from '@/components/HomePageComponents/ContactSection'

export const metadata: Metadata = {
  title: 'Обмен криптовалют в Москве — быстро, безопасно и выгодно',
  description: 'Обменяйте USDT, BTC, ETH и другие криптовалюты на рубли. Наличными в офисе или онлайн переводом. Курс выше рынка, без скрытых комиссий, 24/7.',
  keywords: 'обмен криптовалют, Москва, USDT, BTC, ETH, наличные, онлайн, курс, безопасно, быстро',
  openGraph: {
    title: 'Обмен криптовалют в Москве — быстро, безопасно и выгодно',
    description: 'Обменяйте USDT, BTC, ETH и другие криптовалюты на рубли. Наличными в офисе или онлайн переводом.',
    type: 'website',
    url: 'https://yourdomain.com',
    siteName: 'Криптообменник',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://yourdomain.com'),
}

export default function HomePage() {
  return (
    <>
      {/* SEO контент рендерится на сервере */}
      <div className="sr-only">
        <h1>Обмен криптовалют в Москве — быстро, безопасно и выгодно</h1>
        <p>Обменяйте USDT, BTC, ETH и другие криптовалюты на рубли. Наличными в офисе или онлайн переводом. Курс выше рынка, без скрытых комиссий, 24/7.</p>
        <p>Более 5000 успешных сделок. Без верификации. Конфиденциально.</p>
        <p>Популярные направления: USDT → RUB, BTC → RUB, ETH → RUB, RUB → USDT, USD → USDT</p>
        <p>Офис в центре Москвы. Работаем 24/7. Личный менеджер для каждой сделки.</p>
      </div>
      
      {/* Основной контент - серверные компоненты */}
      <HeroSection />
      <UTPSection />
      <AdvantagesSection />
      <ProcessSection />
      <RatesSection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}