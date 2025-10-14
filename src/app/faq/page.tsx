import { Metadata } from 'next'
import FaqServerContent from '@/components/FaqServerContent'
import FaqInteractive from '@/components/FaqInteractive'
import FaqStructuredData from '@/components/FaqStructuredData'

export const metadata: Metadata = {
  title: 'FAQ - Часто задаваемые вопросы - Криптообменник',
  description: 'Ответы на часто задаваемые вопросы о нашем сервисе обмена криптовалют. Узнайте как совершить обмен, какие комиссии взимаются, сколько времени занимает обмен и многое другое.',
  keywords: 'FAQ, часто задаваемые вопросы, обмен криптовалют, как обменять, комиссии, время обмена, безопасность, KYC, AML',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'FAQ - Часто задаваемые вопросы - Криптообменник',
    description: 'Ответы на часто задаваемые вопросы о нашем сервисе обмена криптовалют',
    type: 'website',
    url: 'https://anonex.ru/faq',
    siteName: 'Криптообменник',
  }
}

export default function FaqPage() {
  return (
    <>
      {/* Структурированные данные для поисковых систем */}
      <FaqStructuredData />
      
      {/* SEO контент для индексации */}
      <FaqServerContent />
      
      {/* Интерактивный интерфейс для пользователей */}
      <FaqInteractive />
    </>
  )
}
