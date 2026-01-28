// ServiceWearsClient.tsx

"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CheckCircle, Star, Shield, Leaf, ArrowLeft } from 'lucide-react'

export default function ServiceWearsClient() {
  const collections = [
    {
      name: "Modest Daily Wear",
      description: "Comfortable, stylish clothing suitable for everyday activities while maintaining Islamic standards of modesty.",
      features: ["Prayer-friendly", "Breathable fabrics", "Modern cuts", "Seasonal collections"]
    },
    {
      name: "Special Occasion",
      description: "Elegant attire for weddings, Eid celebrations, and other Islamic gatherings that combine beauty with modesty.",
      features: ["Premium materials", "Traditional embroidery", "Custom fitting", "Luxury finish"]
    },
    {
      name: "Prayer Attire",
      description: "Specifically designed clothing that facilitates proper prayer positions while ensuring full coverage and comfort.",
      features: ["Easy movement", "Lightweight", "Quick-dry fabrics", "Travel-friendly"]
    },
    {
      name: "Children's Collection",
      description: "Age-appropriate modest clothing for young Muslims, designed with comfort, safety, and Islamic identity in mind.",
      features: ["Child-safe materials", "Growth allowance", "Easy wear", "Educational designs"]
    }
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Modesty First",
      description: "Every design prioritizes Islamic requirements for haya (modesty) while maintaining contemporary appeal."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Craftsmanship",
      description: "Attention to detail in stitching, fabric selection, and finishing for durable, beautiful garments."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Ethical Production",
      description: "Fair labor practices, sustainable materials, and responsible manufacturing processes."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Authentic Identity",
      description: "Clothing that reflects Muslim values while allowing personal expression and cultural diversity."
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
            Islamic Fashion & Modest Wear
          </Badge>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#0A5C36' }}
          >
            Dhaat Wears
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Islamic-compliant clothing that beautifully balances modesty, quality, and contemporary style while honoring Muslim identity
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Our Vision for Islamic Fashion
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              Dhaat Wears redefines Islamic fashion by creating garments that respect Islamic principles 
              while embracing modern design sensibilities. We believe modesty and style can coexist beautifully.
            </p>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              Each piece is thoughtfully designed to provide comfort, coverage, and confidence, whether 
              for daily wear, special occasions, or prayer.
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
              Why Choose Dhaat Wears?
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

        {/* Collections */}
        <div className="mb-16">
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#0A5C36' }}
          >
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <CardTitle style={{ color: '#0A5C36' }}>
                    {collection.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p 
                    className="mb-6"
                    style={{ color: '#1F2A24' }}
                  >
                    {collection.description}
                  </p>
                  <div>
                    <h4 
                      className="font-semibold mb-3"
                      style={{ color: '#0A5C36' }}
                    >
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {collection.features.map((feature, idx) => (
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

        {/* CTA */}
        <div 
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: '#F6F8F5' }}
          >
            Explore Our Collections
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#F6F8F5' }}
          >
            View our latest designs and discover modest fashion that reflects your values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gap-2"
              style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              asChild
            >
              <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                WhatsApp Catalog Request
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="gap-2"
              style={{ borderColor: '#F6F8F5', color: '#F6F8F5' }}
              asChild
            >
              <a href="tel:09132030346">
                Call for Custom Orders
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}