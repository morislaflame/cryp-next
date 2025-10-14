import { Metadata } from 'next'
import ProfilePageClient from '@/components/ProfilePageClient'

export const metadata: Metadata = {
  title: 'Профиль - Криптообменник',
  description: 'Управление профилем и история операций.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function ProfilePage() {
  return <ProfilePageClient />
}
