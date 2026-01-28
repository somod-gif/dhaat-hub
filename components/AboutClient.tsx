"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Target, Heart, Users, Award, Globe, Shield } from 'lucide-react'

export default function AboutClient() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To provide integrated Islamic services and education that empower individuals and strengthen communities, fostering holistic development grounded in authentic Islamic principles."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Islamic Foundation",
      description: "Every service, class, and initiative at Dhaat Hub is built upon Quranic guidance and Prophetic teachings, ensuring authenticity and spiritual alignment in all we do."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Development",
      description: "We believe in nurturing vibrant Muslim communities through collaborative efforts, shared knowledge, and mutual support that extends beyond individual growth."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "Transparency, honesty, and ethical conduct form the foundation of every interaction and service we provide, building lasting relationships with our community."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in service delivery, educational content, and community support, continuously improving to serve you better."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Ethical Growth",
      description: "Our expansion and development follow Islamic principles of balanced growth, social responsibility, and sustainable impact."
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
            About Dhaat Hub
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            A comprehensive Islamic platform dedicated to integrating faith, knowledge, services, and community development
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Our Vision
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              To create an ecosystem where Islamic values seamlessly integrate with daily life, 
              providing Muslims with accessible, authentic resources for personal, professional, 
              and spiritual growth.
            </p>
            <p 
              className="text-lg mb-6"
              style={{ color: '#1F2A24' }}
            >
              Dhaat Hub represents the convergence of traditional Islamic knowledge with modern 
              service delivery, ensuring that Muslim communities have reliable, halal alternatives 
              for their diverse needs.
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
              Our Identity
            </h2>
            <p 
              className="text-lg"
              style={{ color: '#1F2A24' }}
            >
              &quot;Dhaat&quot; signifies essence, core, and substance. At Dhaat Hub, we focus on 
              the essential needs of the Muslim community—authentic knowledge, ethical services, 
              and genuine connection—building from the core outward.
            </p>
          </div>
        </div>

        <Separator className="my-16" style={{ backgroundColor: '#E8F5E9' }} />

        {/* Values Grid */}
        <div className="mb-16">
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#0A5C36' }}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <div className="mb-4" style={{ color: '#0A5C36' }}>
                    {value.icon}
                  </div>
                  <CardTitle style={{ color: '#0A5C36' }}>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#1F2A24' }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div 
          className="rounded-2xl p-8 md:p-12 mb-16"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: '#0A5C36' }}
          >
            Our Holistic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: '#0A5C36' }}
              >
                Integrated Services
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Combining practical services with spiritual education for comprehensive Islamic living
              </p>
            </div>
            <div className="text-center">
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: '#0A5C36' }}
              >
                Quality Assurance
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Rigorous standards in all offerings, ensuring excellence and reliability
              </p>
            </div>
            <div className="text-center">
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: '#0A5C36' }}
              >
                Community Focus
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Building networks of support and collaboration among Muslims
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: '#0A5C36' }}
          >
            Join Our Journey
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Dhaat Hub is more than a platform—it&apos;s a community of Muslims committed to 
            living Islam comprehensively. We invite you to explore, learn, grow, and 
            contribute to this shared vision of Islamic excellence.
          </p>
        </div>
      </div>
    </div>
  )
}