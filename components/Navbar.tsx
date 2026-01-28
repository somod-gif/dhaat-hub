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
      {/* Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#0A5C36] via-[#0d7a46] to-[#0A5C36] py-2">
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
            backgroundColor: isScrolled ? "rgba(246,248,245,0.95)" : "#F6F8F5",
            borderColor: "#E8F5E9",
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
                    src="/images/dhaat-logo.jpg"
                    alt="Dhaat Hub Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger className="flex items-center gap-1.5 text-[16px] font-semibold text-[#1F2A24] hover:text-[#0A5C36] transition-all duration-200 group">
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A5C36] to-[#C7FF1A] group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="mt-3 rounded-xl border shadow-xl min-w-[200px] p-2"
                        style={{
                          backgroundColor: "rgba(246,248,245,0.98)",
                          borderColor: "#E8F5E9",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link
                              href={sub.href}
                              className="px-4 py-3 text-[15px] text-[#1F2A24] hover:text-[#0A5C36] rounded-lg hover:bg-[#E8F5E9]/50 transition-all duration-200 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0A5C36] to-[#C7FF1A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              {sub.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[16px] font-semibold text-[#1F2A24] hover:text-[#0A5C36] transition-all duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A5C36] to-[#C7FF1A] group-hover:w-full transition-all duration-300"></span>
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
                    background: "linear-gradient(135deg, #C7FF1A 0%, #b0e517 100%)",
                    color: "#1F2A24",
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
                  className="gap-2 rounded-full px-6 font-semibold border-2 hover:border-[#0A5C36] hover:bg-[#0A5C36]/5 transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: "#0A5C36", color: "#0A5C36" }}
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
                className="lg:hidden rounded-xl p-2 text-[#0A5C36] hover:bg-[#E8F5E9]/50 transition-all duration-200"
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
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(135deg, #F6F8F5 0%, #E8F5E9 100%)",
          }}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "#0A5C36/20" }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-[#0A5C36] to-[#C7FF1A] rounded-full"></div>
                <h3 className="text-2xl font-bold text-[#0A5C36]">DHAAT HUB</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-[#0A5C36]/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[#0A5C36]" />
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
                      className="block py-4 px-4 rounded-xl text-lg font-semibold text-[#1F2A24] hover:text-[#0A5C36] hover:bg-white/50 transition-all duration-200 group-hover:translate-x-2"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown className="h-5 w-5 text-[#0A5C36]/50 group-hover:text-[#0A5C36] transition-colors" />
                        )}
                      </div>
                    </Link>
                    
                    {/* Dropdown items for mobile */}
                    {item.dropdown && (
                      <div className="ml-6 mt-1 space-y-2 border-l-2 border-[#0A5C36]/20 pl-4">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-4 rounded-lg text-base font-medium text-[#1F2A24]/80 hover:text-[#0A5C36] hover:bg-white/30 transition-all duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0A5C36]/40"></div>
                              {sub.name}
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
            <div className="border-t p-6 space-y-4" style={{ borderColor: "#0A5C36/20" }}>
              <div className="text-center mb-4">
                <p className="text-sm text-[#1F2A24]/70 font-medium">
                  Get in touch with us
                </p>
              </div>
              
              <Button
                size="lg"
                className="w-full gap-3 rounded-xl py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #C7FF1A 0%, #b0e517 100%)",
                  color: "#1F2A24",
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
                style={{ borderColor: "#0A5C36", color: "#0A5C36" }}
                asChild
              >
                <a href="tel:09132030346">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </a>
              </Button>

              {/* Contact Info */}
              <div className="pt-6 border-t border-[#0A5C36]/10">
                <div className="text-center space-y-2">
                  <p className="text-sm text-[#1F2A24]/70">Email us at</p>
                  <a 
                    href="mailto:info@dhaathub.com" 
                    className="text-[#0A5C36] font-semibold hover:underline transition-all duration-200"
                  >
                    info@dhaathub.com
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