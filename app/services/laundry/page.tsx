import type { Metadata } from 'next'
import ServiceLaundryClient from '@/components/ServiceLaundryClient'

export const metadata: Metadata = {
  title: 'Dhaat Laundry - Professional Garment Care',
  description: 'Respectful and professional laundry services with attention to cleanliness and care.',
}

export default function LaundryPage() {
  return <ServiceLaundryClient />
}