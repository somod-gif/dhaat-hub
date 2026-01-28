import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services - Dhaat Hub',
  description: 'Discover comprehensive Islamic services including wears, logistics, laundry, and support solutions.',
}

export default function ServicesPage() {
  return <ServicesClient />
}