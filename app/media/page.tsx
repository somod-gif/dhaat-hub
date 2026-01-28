import type { Metadata } from 'next'
import MediaClient from '@/components/MediaClient'

export const metadata: Metadata = {
  title: 'Dhaat Media - Islamic Podcast & Audiobook',
  description: 'Listen to Dhaat Podcast for conversations on Islam, business, wealth, and lifestyle. Access Dhaat Audiobook for Islamic learning resources.',
  keywords: ['Islamic podcast', 'Muslim audiobook', 'Islamic learning', 'Dhaat podcast', 'Quranic wisdom audio', 'Islamic business podcast'],
  openGraph: {
    title: 'Dhaat Media - Islamic Podcast & Audiobook',
    description: 'Islamic audio content for learning, inspiration, and personal growth',
    type: 'website',
  },
}

export default function MediaPage() {
  return <MediaClient />
}