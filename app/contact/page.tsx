import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Dhaat Hub - Get in Touch',
  description: 'Reach out to Dhaat Hub via WhatsApp, phone call, or email for inquiries and support.',
}

export default function ContactPage() {
  return <ContactClient />
}