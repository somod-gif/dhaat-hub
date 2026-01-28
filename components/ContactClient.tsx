/* eslint-disable react/no-unescaped-entities */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MessageCircle, Phone, Mail, Clock, MapPin, Users, Shield } from 'lucide-react'

export default function ContactClient() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      details: "08172486346",
      description: "Preferred method for quick responses and file sharing",
      action: "Chat Now",
      href: "https://wa.me/2348172486346",
      color: "#25D366"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Call",
      details: "09132030346",
      description: "Direct conversation for urgent matters",
      action: "Call Now",
      href: "tel:09132030346",
      color: "#0A5C36"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      details: "dhaathub@gmail.com",
      description: "Detailed inquiries and formal communication",
      action: "Send Email",
      href: "mailto:dhaathub@gmail.com",
      color: "#EA4335"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" }
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
            Get in Touch
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            We're here to assist you. Choose your preferred method to connect with Dhaat Hub
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              style={{ backgroundColor: '#F6F8F5' }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div style={{ color: method.color }}>
                    {method.icon}
                  </div>
                </div>
                <CardTitle style={{ color: '#0A5C36' }}>
                  {method.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold" style={{ color: '#1F2A24' }}>
                  {method.details}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p 
                  className="mb-6"
                  style={{ color: '#1F2A24' }}
                >
                  {method.description}
                </p>
                <Button 
                  className="w-full gap-2"
                  style={{ backgroundColor: method.color, color: '#1F2A24' }}
                  asChild
                >
                  <a href={method.href} target={method.title === 'WhatsApp' || method.title === 'Email' ? '_blank' : undefined} rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" style={{ backgroundColor: '#E8F5E9' }} />

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Business Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6" style={{ color: '#0A5C36' }} />
              <h2 
                className="text-2xl font-bold"
                style={{ color: '#0A5C36' }}
              >
                Business Hours
              </h2>
            </div>
            <Card 
              className="border-none"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {businessHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#0A5C36' }}>
                      <span className="font-medium" style={{ color: '#0A5C36' }}>
                        {hour.day}
                      </span>
                      <span style={{ color: '#1F2A24' }}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F6F8F5' }}>
                  <p className="text-sm" style={{ color: '#1F2A24' }}>
                    <strong>Note:</strong> Response times may vary outside business hours. 
                    For urgent matters outside these hours, please use WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6" style={{ color: '#0A5C36' }} />
              <h2 
                className="text-2xl font-bold"
                style={{ color: '#0A5C36' }}
              >
                Support Guidelines
              </h2>
            </div>
            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <div className="space-y-6">
                <div>
                  <h3 
                    className="font-bold mb-2"
                    style={{ color: '#0A5C36' }}
                  >
                    <Shield className="inline h-4 w-4 mr-2" />
                    Response Time
                  </h3>
                  <p style={{ color: '#1F2A24' }}>
                    We aim to respond within 1 hour during business hours and within 4 hours outside business hours.
                  </p>
                </div>
                <div>
                  <h3 
                    className="font-bold mb-2"
                    style={{ color: '#0A5C36' }}
                  >
                    <MessageCircle className="inline h-4 w-4 mr-2" />
                    Preferred Channel
                  </h3>
                  <p style={{ color: '#1F2A24' }}>
                    WhatsApp is our most responsive channel for quick inquiries, updates, and file sharing.
                  </p>
                </div>
                <div>
                  <h3 
                    className="font-bold mb-2"
                    style={{ color: '#0A5C36' }}
                  >
                    <Users className="inline h-4 w-4 mr-2" />
                    Department Routing
                  </h3>
                  <p style={{ color: '#1F2A24' }}>
                    Specify your inquiry type (Service, Class, Media, General) for faster routing to the appropriate team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: '#F6F8F5' }}
          >
            Need Immediate Assistance?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#F6F8F5' }}
          >
            For urgent matters, WhatsApp is your fastest route to our support team
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg gap-2"
            style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
            asChild
          >
            <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              Start WhatsApp Chat
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}