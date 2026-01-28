"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CheckCircle, Truck, Shield, Clock, MapPin, Package, ArrowLeft, Phone, MessageCircle,  } from 'lucide-react'

export default function ServiceLogisticsClient() {
  const services = [
    {
      name: "Local Delivery",
      description: "Reliable same-day and next-day delivery services within metropolitan areas.",
      features: ["Real-time tracking", "Secure handling", "Flexible scheduling", "Proof of delivery"]
    },
    {
      name: "Nationwide Shipping",
      description: "Comprehensive shipping solutions across Nigeria with transparent pricing.",
      features: ["Nationwide coverage", "Insurance options", "Bulk discounts", "Door-to-door service"]
    },
    {
      name: "Business Logistics",
      description: "Customized logistics solutions for businesses of all sizes.",
      features: ["B2B solutions", "Inventory management", "Supply chain optimization", "Dedicated support"]
    },
    {
      name: "Special Handling",
      description: "Careful handling of fragile, valuable, or sensitive items.",
      features: ["White-glove service", "Climate control", "Security escort", "Special packaging"]
    }
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Security",
      description: "Every delivery is handled with utmost care and security, following Islamic principles of trust."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Punctuality",
      description: "We respect your time with reliable scheduling and on-time deliveries."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Transparency",
      description: "Real-time tracking and clear communication throughout the delivery process."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Responsibility",
      description: "Full accountability for your items from pickup to final delivery."
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="gap-2"
            style={{ color: '#0A5C36' }}
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            className="mb-4 px-4 py-1.5 text-sm font-semibold"
            style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
          >
            Reliable Delivery Solutions
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Truck className="h-8 w-8" style={{ color: '#0A5C36' }} />
            <h1 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#0A5C36' }}
            >
              Dhaat Logistics
            </h1>
          </div>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Efficient, trustworthy logistics and delivery services built on Islamic business ethics and professional excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Our Logistics Philosophy
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              At Dhaat Logistics, we understand that every delivery represents trust. 
              We combine modern logistics technology with Islamic principles of honesty, 
              responsibility, and excellent service.
            </p>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              Whether you&apos;re sending personal items, business goods, or sensitive documents, 
              our team handles your packages with the care and respect they deserve.
            </p>
          </div>
          
          <div 
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#E8F5E9' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Why Choose Us?
            </h2>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1" style={{ color: '#0A5C36' }}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: '#0A5C36' }}
                    >
                      {value.title}
                    </h3>
                    <p style={{ color: '#1F2A24' }}>
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#0A5C36' }}
          >
            Our Logistics Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <CardTitle style={{ color: '#0A5C36' }}>
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p 
                    className="mb-6"
                    style={{ color: '#1F2A24' }}
                  >
                    {service.description}
                  </p>
                  <div>
                    <h4 
                      className="font-semibold mb-3"
                      style={{ color: '#0A5C36' }}
                    >
                      Features:
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coverage Area */}
        <div 
          className="rounded-2xl p-8 mb-16"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: '#F6F8F5' }}
          >
            Service Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>24+</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                States Covered
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Extensive nationwide reach across Nigeria
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>100+</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Cities Served
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Major urban and suburban locations
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>Same-Day</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                In Key Areas
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Express delivery available in metropolitan regions
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
            Get a Delivery Quote
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Contact us for pricing, scheduling, or custom logistics solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gap-2"
              style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              asChild
            >
              <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Quote Request
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
                <Phone className="h-5 w-5" />
                Call for Urgent Delivery
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}