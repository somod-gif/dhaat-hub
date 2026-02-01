"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // WhatsApp colors
  const WHATSAPP_GREEN = "#25D366"
  const WHATSAPP_LIGHT_GREEN = "#128C7E"
  const WHATSAPP_DARK_GREEN = "#075E54"
  const LEMON_ACCENT = "#C7FF1A"
  const OFF_WHITE = "#F6F8F5"
  const CHARCOAL = "#1F2A24"

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
    { name: 'Dhaat Arabic Poetry', href: '/services/poetry' },
  ]

  const contactInfo = [
    { 
      icon: <Phone className="h-4 w-4" />, 
      text: '09132030346',
      href: 'tel:09132030346'
    },
    { 
      icon: <MessageCircle className="h-4 w-4" />, 
      text: '08172486346',
      href: 'https://wa.me/2348172486346'
    },
    { 
      icon: <Mail className="h-4 w-4" />, 
      text: 'dhaathub@gmail.com',
      href: 'mailto:dhaathub@gmail.com'
    },
  ]

  return (
    <footer style={{ 
      background: `linear-gradient(135deg, ${WHATSAPP_DARK_GREEN} 0%, ${WHATSAPP_LIGHT_GREEN} 100%)`,
      borderTop: `2px solid ${LEMON_ACCENT}40`
    }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="relative h-16 w-44 mb-6">
              <Image
                src="/images/dhaat-logo2.png"
                alt="Dhaat Hub Logo"
                fill
                priority
                className="object-contain drop-shadow-md"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="mb-6 text-base leading-relaxed" style={{ color: OFF_WHITE + 'CC' }}>
              An integrated Islamic platform providing authentic knowledge, ethical services, and community development for holistic Muslim living.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="icon" 
                variant="ghost"
                className="rounded-full hover:scale-110 transition-all duration-200"
                style={{ 
                  color: LEMON_ACCENT,
                  backgroundColor: 'rgba(199, 255, 26, 0.1)',
                  border: `1px solid ${LEMON_ACCENT}40`
                }}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="rounded-full hover:scale-110 transition-all duration-200"
                style={{ 
                  color: LEMON_ACCENT,
                  backgroundColor: 'rgba(199, 255, 26, 0.1)',
                  border: `1px solid ${LEMON_ACCENT}40`
                }}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="rounded-full hover:scale-110 transition-all duration-200"
                style={{ 
                  color: LEMON_ACCENT,
                  backgroundColor: 'rgba(199, 255, 26, 0.1)',
                  border: `1px solid ${LEMON_ACCENT}40`
                }}
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: LEMON_ACCENT }}>
              <div className="w-1.5 h-6 rounded-full" style={{ background: LEMON_ACCENT }}></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 py-2 transition-all duration-200 hover:translate-x-1"
                    style={{ color: OFF_WHITE }}
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                      style={{ color: LEMON_ACCENT }} />
                    <span className="group-hover:text-[#C7FF1A] transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: LEMON_ACCENT }}>
              <div className="w-1.5 h-6 rounded-full" style={{ background: LEMON_ACCENT }}></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 py-2 transition-all duration-200 hover:translate-x-1"
                    style={{ color: OFF_WHITE }}
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                      style={{ color: LEMON_ACCENT }} />
                    <span className="group-hover:text-[#C7FF1A] transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: LEMON_ACCENT }}>
              <div className="w-1.5 h-6 rounded-full" style={{ background: LEMON_ACCENT }}></div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.includes('wa.me') || info.href.includes('mailto') ? '_blank' : '_self'}
                    rel={info.href.includes('wa.me') ? 'noopener noreferrer' : ''}
                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/5"
                  >
                    <div className="p-2 rounded-full" style={{ 
                      backgroundColor: LEMON_ACCENT + '20',
                      color: LEMON_ACCENT
                    }}>
                      {info.icon}
                    </div>
                    <span style={{ color: OFF_WHITE }} className="group-hover:text-[#C7FF1A] transition-colors">
                      {info.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button 
                className="w-full gap-2 rounded-full py-6 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  background: LEMON_ACCENT,
                  color: CHARCOAL,
                }}
                asChild
              >
                <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  WhatsApp Quick Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center border-t" style={{ borderColor: LEMON_ACCENT + '30' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p style={{ color: OFF_WHITE + 'CC' }}>
                © {currentYear} Dhaat Hub. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: LEMON_ACCENT }}>
                Islamic Services & Education Platform
              </span>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: LEMON_ACCENT }}></div>
            </div>
          </div>
          <p className="mt-4 text-sm" style={{ color: LEMON_ACCENT }}>
            🌟 Building Islamic Excellence in Every Aspect of Life
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
            <div className="w-8 h-1 rounded-full" style={{ background: LEMON_ACCENT }}></div>
            <div className="text-2xl" style={{ color: LEMON_ACCENT }}>⋆</div>
            <div className="w-8 h-1 rounded-full" style={{ background: LEMON_ACCENT }}></div>
          </div>
        </div>
      </div>
    </footer>
  )
}