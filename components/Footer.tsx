"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Classes', href: '/classes' },
    { name: 'Media', href: '/media' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Dhaat Wears', href: '/services/wears' },
    { name: 'Dhaat Logistics', href: '/services/logistics' },
    { name: 'Dhaat Laundry', href: '/services/laundry' },
    { name: 'Dhaat Support', href: '/services/support' },
  ]

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: '09132030346' },
    { icon: <MessageCircle className="h-4 w-4" />, text: '08172486346' },
    { icon: <Mail className="h-4 w-4" />, text: 'dhaathub@gmail.com' },
  ]

  return (
    <footer style={{ backgroundColor: '#1F2A24' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="relative h-12 w-40 mb-6">
              <Image
                src="/images/dhaat-logo.jpg"
                alt="Dhaat Hub Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="mb-6" style={{ color: '#E8F5E9' }}>
              An integrated Islamic platform providing authentic knowledge, ethical services, and community development for holistic Muslim living.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost"
                className="hover:bg-white/10"
                style={{ color: '#F6F8F5' }}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="hover:bg-white/10"
                style={{ color: '#F6F8F5' }}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="hover:bg-white/10"
                style={{ color: '#F6F8F5' }}
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F6F8F5' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-all"
                    style={{ color: '#E8F5E9' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F6F8F5' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-all"
                    style={{ color: '#E8F5E9' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F6F8F5' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div style={{ color: '#C7FF1A' }}>
                    {info.icon}
                  </div>
                  <span style={{ color: '#E8F5E9' }}>{info.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button 
                className="w-full gap-2"
                style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                asChild
              >
                <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Quick Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: '#0A5C36' }}>
          <p style={{ color: '#E8F5E9' }}>
            © {currentYear} Dhaat Hub. All rights reserved. | 
            <span className="mx-2">·</span>
            Islamic Services & Education Platform
          </p>
          <p className="mt-2 text-sm" style={{ color: '#C7FF1A' }}>
            Building Islamic Excellence in Every Aspect of Life
          </p>
        </div>
      </div>
    </footer>
  )
}