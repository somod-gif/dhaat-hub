import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'About Dhaat Hub - Our Vision & Values',
  description: 'Learn about Dhaat Hub\'s mission to provide Islamic services, education, and community development based on trust and excellence.',
}

export default function AboutPage() {
  return <AboutClient />
}