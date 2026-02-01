"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // WhatsApp colors
  const WHATSAPP_GREEN = "#25D366"
  const WHATSAPP_LIGHT_GREEN = "#128C7E"
  const WHATSAPP_DARK_GREEN = "#075E54"
  const LEMON_ACCENT = "#C7FF1A" // Our brand's lemon accent
  const OFF_WHITE = "#F6F8F5"
  const CHARCOAL = "#1F2A24"
  const PRIMARY_GREEN = "#0A5C36"

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Dhaat Wears", href: "/services/wears" },
        { name: "Dhaat Logistics", href: "/services/logistics" },
        { name: "Dhaat Laundry", href: "/services/laundry" },
        { name: "Dhaat Support Team", href: "/services/support" },
        { name: "Dhaat Arabic Poetry", href: "/services/poetry" },
      ],
    },
    { name: "Classes", href: "/classes" },
    {
      name: "Media",
      href: "/media",
      dropdown: [
        { name: "Dhaat Podcast", href: "/media#podcast" },
        { name: "Dhaat Audiobook", href: "/media#audiobook" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Announcement Bar - Using WhatsApp gradient */}
      <div 
        className="w-full py-2"
        style={{
          background: `linear-gradient(135deg, ${WHATSAPP_DARK_GREEN} 0%, ${WHATSAPP_LIGHT_GREEN} 50%, ${WHATSAPP_GREEN} 100%)`
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <p className="text-sm font-medium text-white animate-pulse">
              🎉 Join our community today! Explore our services and classes.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div
          className="border-b transition-all duration-300"
          style={{
            backgroundColor: isScrolled ? `rgba(6, 94, 84, 0.95)` : WHATSAPP_DARK_GREEN,
            borderColor: WHATSAPP_LIGHT_GREEN,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="group flex items-center">
                <div className="relative h-16 w-44 transition-all duration-300 group-hover:scale-[1.03]">
                  <Image
                    src="/images/dhaat-logo2.png"
                    alt="Dhaat Hub Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-md"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger 
                        className="flex items-center gap-1.5 text-[16px] font-semibold transition-all duration-200 group"
                        style={{ color: OFF_WHITE }}
                      >
                        <span className="relative">
                          {item.name}
                          <span 
                            className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: LEMON_ACCENT }}
                          ></span>
                        </span>
                        <ChevronDown 
                          className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" 
                          style={{ color: LEMON_ACCENT }}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="mt-3 rounded-xl border shadow-xl min-w-[200px] p-2"
                        style={{
                          backgroundColor: WHATSAPP_DARK_GREEN,
                          borderColor: WHATSAPP_LIGHT_GREEN,
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link
                              href={sub.href}
                              className="px-4 py-3 text-[15px] rounded-lg transition-all duration-200 flex items-center gap-2 group"
                              style={{ 
                                color: OFF_WHITE,
                              }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: LEMON_ACCENT }}
                              ></div>
                              <span className="group-hover:text-[#C7FF1A] transition-colors">
                                {sub.name}
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[16px] font-semibold transition-all duration-200 relative group"
                      style={{ color: OFF_WHITE }}
                    >
                      {item.name}
                      <span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                        style={{ background: LEMON_ACCENT }}
                      ></span>
                    </Link>
                  )
                )}
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  size="lg"
                  className="gap-2 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: LEMON_ACCENT,
                    color: CHARCOAL,
                  }}
                  asChild
                >
                  <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full px-6 font-semibold border-2 transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    borderColor: LEMON_ACCENT, 
                    color: LEMON_ACCENT,
                    backgroundColor: 'transparent'
                  }}
                  asChild
                >
                  <a href="tel:09132030346">
                    <Phone className="h-5 w-5" />
                    Call
                  </a>
                </Button>
              </div>

              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden rounded-xl p-2 transition-all duration-200"
                style={{ color: LEMON_ACCENT }}
                aria-label="Open menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: WHATSAPP_DARK_GREEN + 'CC' }}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: `linear-gradient(135deg, ${WHATSAPP_DARK_GREEN} 0%, ${WHATSAPP_LIGHT_GREEN} 100%)`,
          }}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: LEMON_ACCENT + '40' }}>
              <div className="flex items-center gap-3">
                <div 
                  className="w-2 h-8 rounded-full"
                  style={{ background: `linear-gradient(to bottom, ${LEMON_ACCENT} 0%, ${WHATSAPP_GREEN} 100%)` }}
                ></div>
                <h3 className="text-2xl font-bold" style={{ color: LEMON_ACCENT }}>
                  DHAAT HUB
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition-colors"
                style={{ color: LEMON_ACCENT }}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name} className="group">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-4 rounded-xl text-lg font-semibold transition-all duration-200 group-hover:translate-x-2"
                      style={{ 
                        color: OFF_WHITE,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown 
                            className="h-5 w-5 transition-colors" 
                            style={{ color: LEMON_ACCENT + '80' }}
                          />
                        )}
                      </div>
                    </Link>
                    
                    {/* Dropdown items for mobile */}
                    {item.dropdown && (
                      <div 
                        className="ml-6 mt-1 space-y-2 border-l-2 pl-4"
                        style={{ borderColor: LEMON_ACCENT + '40' }}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-4 rounded-lg text-base font-medium transition-all duration-200"
                            style={{ 
                              color: OFF_WHITE + 'CC',
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: LEMON_ACCENT }}
                              ></div>
                              <span className="group-hover:text-[#C7FF1A] transition-colors">
                                {sub.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="border-t p-6 space-y-4" style={{ borderColor: LEMON_ACCENT + '40' }}>
              <div className="text-center mb-4">
                <p className="text-sm font-medium" style={{ color: OFF_WHITE + 'CC' }}>
                  Get in touch with us
                </p>
              </div>
              
              <Button
                size="lg"
                className="w-full gap-3 rounded-xl py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: LEMON_ACCENT,
                  color: CHARCOAL,
                }}
                asChild
              >
                <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-3 rounded-xl py-6 text-base font-semibold border-2"
                style={{ 
                  borderColor: LEMON_ACCENT, 
                  color: LEMON_ACCENT,
                  backgroundColor: 'transparent'
                }}
                asChild
              >
                <a href="tel:09132030346">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </a>
              </Button>

              {/* Contact Info */}
              <div className="pt-6 border-t" style={{ borderColor: LEMON_ACCENT + '20' }}>
                <div className="text-center space-y-2">
                  <p className="text-sm" style={{ color: OFF_WHITE + 'CC' }}>Email us at</p>
                  <a 
                    href="mailto:dhaathub@gmail.com" 
                    className="font-semibold hover:underline transition-all duration-200"
                    style={{ color: LEMON_ACCENT }}
                  >
                    dhaathub@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}