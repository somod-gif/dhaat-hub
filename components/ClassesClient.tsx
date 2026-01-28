"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ClassesClient() {
  const classes = [
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

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border-t-4"
              style={{ borderTopColor: '#0A5C36', backgroundColor: '#F6F8F5' }}
            >
              <CardHeader>
                <CardTitle style={{ color: '#0A5C36' }}>{cls.title}</CardTitle>
                <div className="flex gap-4 mt-2">
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
                  className="w-full"
                  style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div 
          className="mt-16 p-8 rounded-2xl"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: '#0A5C36' }}
          >
            How Our Classes Work
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span 
                className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full text-sm"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                1
              </span>
              <span style={{ color: '#1F2A24' }}>Live interactive sessions with qualified instructors</span>
            </li>
            <li className="flex items-start">
              <span 
                className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full text-sm"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                2
              </span>
              <span style={{ color: '#1F2A24' }}>Small class sizes for personalized attention</span>
            </li>
            <li className="flex items-start">
              <span 
                className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full text-sm"
                style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
              >
                3
              </span>
              <span style={{ color: '#1F2A24' }}>Flexible scheduling for students worldwide</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}