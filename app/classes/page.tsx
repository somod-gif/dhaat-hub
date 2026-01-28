import type { Metadata } from 'next'
import ClassesClient from '@/components/ClassesClient'

export const metadata: Metadata = {
  title: 'Islamic Classes - Dhaat Hub',
  description: 'Browse our comprehensive Islamic classes and courses for all levels.',
}

export default function ClassesPage() {
  return <ClassesClient />
}