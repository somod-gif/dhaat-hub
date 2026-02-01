import type { Metadata } from 'next'
import PoetryClient from '@/components/PoetryClient'

export const metadata: Metadata = {
  title: 'Dhaat Arabic Poetry - Classical & Contemporary Arabic Poetry',
  description: 'Explore classical and contemporary Arabic poetry with expert guidance. Learn poetic meters, linguistic beauty, and cultural significance of Arabic verses.',
  keywords: ['Arabic poetry', 'Classical Arabic', 'Arabic literature', 'Arabic poems', 'Islamic poetry', 'Arabic language arts'],
  openGraph: {
    title: 'Dhaat Arabic Poetry - Master the Art of Arabic Verse',
    description: 'Discover the beauty and depth of Arabic poetry through expert guidance and structured learning.',
    type: 'website',
  },
}

export default function PoetryPage() {
  return <PoetryClient />
}