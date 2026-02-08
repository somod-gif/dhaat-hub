"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function ClassesClient() {
  const [copied, setCopied] = useState(false)

  const currentClasses = [
    {
      title: "Arabic Language (Durusul Lugha - Part 1)",
      level: "Beginner",
      duration: "30 Days",
      description: "Learn Arabic with ease - communicate, understand Arabic dialogues, and get familiar with the language of Quran and Hadith. Interactive sessions designed for practical learning.",
      specialOffer: "Limited Pre-Launch Offer: ₦3,000 (Regular: ₦5,000)",
      includes: [
        "Understand Arabic formal discussion",
        "Navigate and improve Arabic skills",
        "Talk about yourself in Arabic",
        "Free eBook 'LEARN ARABIC WITH EASE' (worth ₦20k)",
        "Free access to language learning secrets and tools",
        "Interactive sessions on WhatsApp & Telegram",
        "Professional guidance from experienced instructor"
      ],
      schedule: "Tuesdays, Wednesdays, Saturdays",
      time: "8:30 PM - 9:30 PM",
      platform: "WhatsApp & Telegram",
      slots: "3 slots remaining",
      paymentInfo: {
        accountNumber: "9132030346",
        bank: "Moniepoint",
        accountName: "Adetunji Abdul Salam B."
      },
      whatsappLink: "https://wa.me/message/TTMJGN7ULIXUH1",
      startDate: "After Ramadan 2026",
      bannerImage: "/images/arabic-class-banner.jpeg"
    }
  ]

  const otherClasses = [
    {
      title: "Quran Recitation (Tajweed)",
      level: "Beginner to Advanced",
      duration: "12 Weeks",
      description: "Master the rules of Tajweed with proper pronunciation and articulation."
    },
    {
      title: "Quran Memorization (Hifz)",
      level: "All Levels",
      duration: "Ongoing",
      description: "Structured memorization program with daily revision schedules."
    },
    {
      title: "Islamic Beliefs (Aqeedah)",
      level: "Intermediate",
      duration: "8 Weeks",
      description: "Study the fundamentals of Islamic creed based on Quran and Sunnah."
    },
    {
      title: "Islamic Jurisprudence (Fiqh)",
      level: "Beginner to Advanced",
      duration: "10 Weeks",
      description: "Learn practical rulings of worship and daily life matters."
    },
    {
      title: "Prophetic Biography (Seerah)",
      level: "Beginner",
      duration: "6 Weeks",
      description: "Explore the life and teachings of Prophet Muhammad (PBUH)."
    },
    {
      title: "Islamic History",
      level: "Intermediate",
      duration: "8 Weeks",
      description: "Journey through Islamic civilization and its contributions."
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0A5C36' }}
          >
            Our Islamic Classes
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Comprehensive courses designed to deepen your understanding of Islam with authentic knowledge
          </p>
        </div>

        {/* Current Classes Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 
              className="text-3xl font-bold"
              style={{ color: '#0A5C36' }}
            >
              Current Classes
            </h2>
            <div 
              className="px-4 py-2 rounded-full text-sm font-bold"
              style={{ backgroundColor: '#E65100', color: 'white' }}
            >
              Enrolling Now
            </div>
          </div>

          {currentClasses.map((cls, index) => (
            <div key={index} className="space-y-6">
              {/* Banner Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#1A237E] to-[#283593]"
                >
                  <div className="relative z-10 text-center text-white p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">دروس اللغة العربية</h3>
                    <p className="text-xl md:text-2xl font-semibold mb-4">Durusul Lugha - Part 1</p>
                    <p className="text-lg md:text-xl mb-6">Learn the Language of the Quran & Hadith</p>
                    <div className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                      <span className="font-bold">Limited Slots: {cls.slots}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Arabic pattern */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute -top-20 -left-20 text-white text-9xl">ع</div>
                    <div className="absolute top-1/2 right-10 text-white text-8xl">ب</div>
                    <div className="absolute bottom-10 left-1/4 text-white text-7xl">ر</div>
                    <div className="absolute top-1/3 left-10 text-white text-6xl">غ</div>
                  </div>
                </div>
              </div>

              {/* Class Details Card */}
              <Card 
                className="border-t-4 shadow-lg"
                style={{ borderTopColor: '#E65100', backgroundColor: '#FFF8E1' }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle style={{ color: '#E65100', fontSize: '1.75rem' }}>
                        {cls.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span 
                          className="text-sm px-3 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: '#FFECB3', color: '#E65100' }}
                        >
                          🎯 {cls.level}
                        </span>
                        <span 
                          className="text-sm px-3 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: '#FFECB3', color: '#E65100' }}
                        >
                          📅 {cls.duration}
                        </span>
                        <span 
                          className="text-sm px-3 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: '#E3F2FD', color: '#1565C0' }}
                        >
                          🕒 {cls.time}
                        </span>
                        <span 
                          className="text-sm px-3 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                        >
                          📱 {cls.platform}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="mb-2">
                        <span className="text-gray-500 line-through text-lg">₦5,000</span>
                        <span className="text-2xl font-bold ml-2" style={{ color: '#E65100' }}>₦3,000</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <p className="text-sm font-semibold" style={{ color: '#E65100' }}>
                          ⏳ {cls.slots}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        📅 Starts: <span className="font-semibold">{cls.startDate}</span>
                      </p>
                    </div>
                  </div>
                  
                  {cls.specialOffer && (
                    <div className="mt-4 p-4 rounded-lg border-2 border-dashed" style={{ borderColor: '#E65100', backgroundColor: '#FFF3E0' }}>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl">🎁</span>
                        <p className="font-bold text-center" style={{ color: '#E65100' }}>
                          {cls.specialOffer} - Limited Time Only!
                        </p>
                        <span className="text-2xl">🎁</span>
                      </div>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#0A5C36' }}>
                      About This Class
                    </h4>
                    <p className="mb-4" style={{ color: '#1F2A24' }}>
                      {cls.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <p className="font-semibold" style={{ color: '#1F2A24' }}>
                        📅 Class Days: <span style={{ color: '#E65100' }}>{cls.schedule}</span>
                      </p>
                      <span className="hidden sm:inline text-gray-300">|</span>
                      <p className="font-semibold" style={{ color: '#1F2A24' }}>
                        🕒 Time: <span style={{ color: '#1565C0' }}>{cls.time}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3" style={{ color: '#0A5C36' }}>
                        What You&apos;ll Learn
                      </h4>
                      <ul className="space-y-2">
                        {cls.includes.map((item, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="mr-2 mt-1" style={{ color: '#0A5C36' }}>✓</span>
                            <span style={{ color: '#1F2A24' }} className="group-hover:text-[#0A5C36] transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-3" style={{ color: '#0A5C36' }}>
                        How to Enroll
                      </h4>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg border" style={{ backgroundColor: '#F5F5F5', borderColor: '#E0E0E0' }}>
                          <p className="font-semibold mb-3" style={{ color: '#1F2A24' }}>Payment Details:</p>
                          
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Account Name</p>
                              <div className="p-2 rounded bg-white border">
                                <span className="font-mono">{cls.paymentInfo.accountName}</span>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Account Number</p>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 p-2 rounded bg-white border">
                                  <span className="font-mono">{cls.paymentInfo.accountNumber}</span>
                                </div>
                                <Button
                                  size="sm"
                                  onClick={() => copyToClipboard(cls.paymentInfo.accountNumber)}
                                  style={{ 
                                    backgroundColor: copied ? '#0A5C36' : '#E65100',
                                    color: 'white'
                                  }}
                                  className="whitespace-nowrap"
                                >
                                  {copied ? 'Copied!' : 'Copy'}
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Bank</p>
                              <div className="p-2 rounded bg-white border">
                                <span className="font-mono">{cls.paymentInfo.bank}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-3 rounded bg-blue-50 border border-blue-100">
                            <p className="text-sm text-center" style={{ color: '#1565C0' }}>
                              💡 After payment, share receipt on WhatsApp to confirm enrollment
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Button 
                            className="w-full py-6 text-lg font-bold hover:shadow-lg transition-all"
                            style={{ 
                              backgroundColor: '#E65100', 
                              color: 'white',
                              background: 'linear-gradient(135deg, #E65100 0%, #FF6F00 100%)'
                            }}
                            onClick={() => window.open(cls.whatsappLink, '_blank')}
                          >
                            🚀 Click to Enroll via WhatsApp
                          </Button>
                          
                          <Button 
                            variant="outline"
                            className="w-full py-6 text-lg"
                            style={{ borderColor: '#E65100', color: '#E65100' }}
                            onClick={() => window.open(cls.whatsappLink, '_blank')}
                          >
                            💬 Chat with Instructor
                          </Button>
                        </div>
                        
                        <div className="text-center space-y-2">
                          <p className="text-sm" style={{ color: '#666' }}>
                            Need help? Contact us via WhatsApp
                          </p>
                          <p className="text-xs text-gray-500">
                            Class starts in {cls.startDate} • Only {cls.slots} available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Other Classes Section */}
        <div className="mt-16">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: '#0A5C36' }}
          >
            Other Available Classes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherClasses.map((cls, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-t-4 hover:-translate-y-1"
                style={{ borderTopColor: '#0A5C36', backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <CardTitle style={{ color: '#0A5C36' }}>{cls.title}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                    >
                      {cls.level}
                    </span>
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                    >
                      {cls.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6" style={{ color: '#1F2A24' }}>
                    {cls.description}
                  </p>
                  <Button 
                    className="w-full hover:shadow-md transition-shadow"
                    style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div 
          className="mt-16 p-8 rounded-2xl"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: '#0A5C36' }}
          >
            How Our Classes Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                1
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#0A5C36' }}>Live Sessions</h3>
              <p style={{ color: '#1F2A24' }}>Interactive sessions with qualified instructors</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                2
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#0A5C36' }}>Small Groups</h3>
              <p style={{ color: '#1F2A24' }}>Personalized attention in small class sizes</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                3
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#0A5C36' }}>Flexible Schedule</h3>
              <p style={{ color: '#1F2A24' }}>Convenient timing for students worldwide</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                4
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#0A5C36' }}>Interactive Learning</h3>
              <p style={{ color: '#1F2A24' }}>WhatsApp & Telegram groups for continuous engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}