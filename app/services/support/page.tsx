import type { Metadata } from 'next'
import ServiceSupportClient from '@/components/ServiceSupportClient'

export const metadata: Metadata = {
  title: 'Dhaat Support Team - Customer Assistance',
  description: 'Responsive and respectful customer support and operational assistance.',
}

export default function SupportPage() {
  return <ServiceSupportClient />
}