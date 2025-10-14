import { Metadata } from 'next'
import AdminExchangesPageClient from '@/components/ClientPages/AdminExchangesPageClient'

export const metadata: Metadata = {
  title: 'Админ панель - Заявки - Криптообменник',
  description: 'Управление заявками на обмен.',
  robots: {
    index: false,
    follow: false,
  }
}

export default function AdminExchangesPage() {
  return <AdminExchangesPageClient />
}
