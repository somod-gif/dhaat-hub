"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Shirt, Truck, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesClient() {
  const services = [
    {
      icon: <Shirt className="h-10 w-10" />,
      title: "Dhaat Wears",
      description: "Islamic-compliant clothing that combines modesty, quality, and modern style while respecting Muslim identity.",
      features: ["Modest Fashion", "Premium Quality", "Ethical Production", "Size Inclusive"],
      href: "/services/wears",
      badge: "Fashion"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Dhaat Logistics",
      description: "Reliable and efficient delivery solutions built on trust, professionalism, and Islamic business ethics.",
      features: ["Secure Delivery", "Real-time Tracking", "Nationwide Coverage", "Halal Compliance"],
      href: "/services/logistics",
      badge: "Delivery"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Dhaat Laundry",
      description: "Professional garment care services emphasizing cleanliness, respect for clothing, and attention to detail.",
      features: ["Eco-friendly", "Quality Care", "Quick Turnaround", "Pickup & Delivery"],
      href: "/services/laundry",
      badge: "Care"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Dhaat Support Team",
      description: "Comprehensive customer assistance and operational support that's responsive, respectful, and solution-driven.",
      features: ["24/7 Availability", "Multi-channel Support", "Problem Resolution", "Community Help"],
      href: "/services/support",
      badge: "Support"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#0A5C36' }}
          >
            Our Comprehensive Services
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Integrated Islamic services designed to meet diverse needs while maintaining the highest standards of quality and ethical practice
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              style={{ backgroundColor: '#F6F8F5' }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div style={{ color: '#0A5C36' }}>
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle style={{ color: '#0A5C36' }}>
                        {service.title}
                      </CardTitle>
                      <Badge 
                        className="mt-2"
                        style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                      >
                        {service.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-6" style={{ color: '#1F2A24' }}>
                  {service.description}
                </CardDescription>
                
                <div className="mb-8">
                  <h4 
                    className="font-semibold mb-3"
                    style={{ color: '#0A5C36' }}
                  >
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" style={{ color: '#0A5C36' }} />
                        <span style={{ color: '#1F2A24' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full gap-2"
                  style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                  asChild
                >
                  <Link href={service.href}>
                    Explore Service Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Unified Approach */}
        <div 
          className="rounded-2xl p-8 md:p-12 mb-16"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: '#0A5C36' }}
          >
            Our Unified Service Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>1</div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0A5C36' }}
              >
                Islamic Foundation
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Every service is built upon and aligned with Islamic principles and ethics
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>2</div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0A5C36' }}
              >
                Quality Commitment
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Uncompromising standards in service delivery and customer experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>3</div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0A5C36' }}
              >
                Community Impact
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Services designed to strengthen and support the Muslim community
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: '#0A5C36' }}
          >
            Need Assistance Choosing?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Our support team can help you select the right services for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gap-2"
              style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              asChild
            >
              <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                WhatsApp Consultation
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="gap-2"
              style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
              asChild
            >
              <a href="tel:09132030346">
                Call for Guidance
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}