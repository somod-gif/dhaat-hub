import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Dhaat Hub - Islamic Knowledge & Services',
  description: 'Discover authentic Islamic knowledge, classes, and services in a trustworthy environment.',
}

export default function Home() {
  return <HomeClient />
}