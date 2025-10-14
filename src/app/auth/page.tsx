import { Metadata } from 'next'
import AuthPageClient from '@/components/AuthPageClient'

export const metadata: Metadata = {
  title: 'Авторизация - Криптообменник',
  description: 'Войдите в свой аккаунт для доступа к расширенным функциям обмена.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function AuthPage() {
  return <AuthPageClient />
}
