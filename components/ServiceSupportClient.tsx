"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CheckCircle, Users, Clock, MessageCircle, Shield, Headphones, ArrowLeft } from 'lucide-react'

export default function ServiceSupportClient() {
  const services = [
    {
      name: "Customer Support",
      description: "Assistance with inquiries, bookings, and general information about Dhaat Hub services.",
      features: ["Multi-channel support", "Quick response", "Problem resolution", "Feedback collection"]
    },
    {
      name: "Technical Assistance",
      description: "Help with digital platforms, online classes, and media access issues.",
      features: ["Platform guidance", "Troubleshooting", "Access support", "Technical guidance"]
    },
    {
      name: "Service Coordination",
      description: "Management and coordination of logistics, laundry, and wears services.",
      features: ["Schedule management", "Service tracking", "Vendor coordination", "Quality assurance"]
    },
    {
      name: "Community Support",
      description: "Guidance and assistance for community members and class participants.",
      features: ["Community help", "Resource sharing", "Networking support", "Growth guidance"]
    }
  ]

  const values = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Responsive",
      description: "Timely responses and quick resolution of your concerns."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Respectful",
      description: "Courteous interactions following Islamic etiquette (adab)."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Solution-Focused",
      description: "Proactive approach to finding effective solutions."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Patient Support",
      description: "Understanding and patient assistance for all inquiries."
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
            Customer Assistance & Support
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="h-8 w-8" style={{ color: '#0A5C36' }} />
            <h1 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#0A5C36' }}
            >
              Dhaat Support Team
            </h1>
          </div>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Responsive, respectful, and solution-driven customer assistance and operational support for all Dhaat Hub services
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Our Support Philosophy
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              At Dhaat Support Team, we believe that excellent support is not just about solving 
              problems—it&apos;s about building relationships. We approach every interaction with the 
              Islamic values of patience, kindness, and helpfulness.
            </p>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              Our team is trained not only in technical support but also in Islamic etiquette, 
              ensuring that every conversation reflects the respectful and caring nature of our community.
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
              Our Support Values
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
            Support Services
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

        {/* Channels */}
        <div 
          className="rounded-2xl p-8 mb-16"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#F6F8F5' }}
          >
            Support Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#C7FF1A' }} />
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                WhatsApp
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Fastest response for quick questions and file sharing
              </p>
              <Badge className="mt-3" style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}>
                Recommended
              </Badge>
            </div>
            <div className="text-center">
              <Headphones className="h-12 w-12 mx-auto mb-4" style={{ color: '#C7FF1A' }} />
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Phone Call
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Direct conversation for complex or urgent matters
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" style={{ color: '#C7FF1A' }} />
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Email
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Detailed inquiries requiring documentation or formal communication
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
            Get Support Now
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Our support team is ready to assist you with any questions or concerns
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
                WhatsApp Quick Support
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
                <Headphones className="h-5 w-5" />
                Call for Urgent Assistance
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}