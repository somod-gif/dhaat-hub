import type { Metadata } from 'next'
import ServiceLogisticsClient from '@/components/ServiceLogisticsClient'

export const metadata: Metadata = {
  title: 'Dhaat Logistics - Reliable Delivery Solutions',
  description: 'Efficient, trustworthy logistics and delivery services built on Islamic principles.',
}

export default function LogisticsPage() {
  return <ServiceLogisticsClient />
}