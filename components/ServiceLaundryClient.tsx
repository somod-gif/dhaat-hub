"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CheckCircle, Droplets, Shield, Leaf, Sparkles, ArrowLeft } from 'lucide-react'

export default function ServiceLaundryClient() {
  const services = [
    {
      name: "Regular Laundry",
      description: "Professional washing, drying, and folding for everyday garments.",
      features: ["Eco-friendly detergents", "Color separation", "Quality folding", "Same-day service"]
    },
    {
      name: "Dry Cleaning",
      description: "Specialized care for delicate fabrics, suits, and formal wear.",
      features: ["Expert handling", "Stain treatment", "Professional pressing", "Garment bags"]
    },
    {
      name: "Premium Care",
      description: "Extra attention for luxury items, traditional attire, and special garments.",
      features: ["Hand washing", "Special treatments", "Custom packaging", "Quality inspection"]
    },
    {
      name: "Bulk Service",
      description: "Cost-effective solutions for families, offices, and businesses.",
      features: ["Volume discounts", "Scheduled pickup", "Monthly plans", "Priority processing"]
    }
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Care",
      description: "Every garment treated with respect and attention to detail."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Environmentally conscious processes and halal-certified products."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Professionalism",
      description: "Trained staff using modern equipment and best practices."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Hygiene Focus",
      description: "Cleanliness standards that respect Islamic principles of purity."
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
            Professional Garment Care
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Droplets className="h-8 w-8" style={{ color: '#0A5C36' }} />
            <h1 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#0A5C36' }}
            >
              Dhaat Laundry
            </h1>
          </div>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Professional laundry services emphasizing cleanliness, respect for clothing, and attention to detail with Islamic care standards
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Our Care Philosophy
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              At Dhaat Laundry, we understand that clothing represents more than just fabric—it&apos;s an 
              expression of personal identity and Islamic values of modesty and cleanliness.
            </p>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              We combine modern cleaning technology with traditional care principles, ensuring your 
              garments are treated with the respect they deserve while maintaining the highest standards of hygiene.
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
              Why Trust Us?
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
            Our Laundry Services
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

        {/* Process */}
        <div 
          className="rounded-2xl p-8 mb-16"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#F6F8F5' }}
          >
            Our 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>1</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Schedule Pickup
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Choose your preferred time for garment collection
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>2</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Professional Cleaning
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Expert care using appropriate methods for each garment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>3</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Quality Check
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Rigorous inspection to ensure perfect results
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>4</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Timely Delivery
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Fresh, clean garments returned at your convenience
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
            Schedule a Pickup
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Experience professional garment care that respects your clothing and your values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gap-2"
              style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              asChild
            >
              <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                WhatsApp Schedule Request
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
                Call for Same-Day Service
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}