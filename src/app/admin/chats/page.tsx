import { Metadata } from 'next'
import AdminChatsPageClient from '@/components/ClientPages/AdminChatsPageClient'

export const metadata: Metadata = {
  title: 'Админ панель - Чаты - Криптообменник',
  description: 'Управление чатами поддержки.',
  robots: {
    index: false,
    follow: false,
  }
}

export default function AdminChatsPage() {
  return <AdminChatsPageClient />
}
