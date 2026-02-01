"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { ArrowLeft, BookOpen, PenTool, Users, Calendar, Award, Quote, Heart, Sparkles, Star, Languages, Brain, PhoneIcon, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

export default function PoetryClient() {
  const [activeTab, setActiveTab] = useState("classical")

  const poetryTypes = [
    {
      id: "classical",
      name: "Classical Poetry",
      description: "Ancient Arabic poetry from pre-Islamic and early Islamic periods, including famous poets like Imru' al-Qais and Al-Mutanabbi.",
      features: ["Pre-Islamic (Jahiliyyah) poetry", "Umayyad period", "Abbasid golden age", "Traditional Qasida forms"]
    },
    {
      id: "contemporary",
      name: "Contemporary Poetry",
      description: "Modern Arabic poetry exploring current themes while maintaining linguistic richness and poetic traditions.",
      features: ["Modernist movements", "Free verse", "Thematic diversity", "Cultural commentary"]
    },
    {
      id: "islamic",
      name: "Islamic Poetry",
      description: "Poetry focused on spiritual themes, praising the Prophet (PBUH), and exploring Islamic values and history.",
      features: ["Madih Nabawi", "Tasawwuf poetry", "Historical narratives", "Spiritual themes"]
    },
    {
      id: "learning",
      name: "Poetry Learning",
      description: "Structured courses to understand Arabic poetic meters (Bahr), rhyme schemes, and literary devices.",
      features: ["Arud (prosody) lessons", "Rhyme patterns", "Literary analysis", "Composition guidance"]
    }
  ]

  const courses = [
    {
      title: "Introduction to Arabic Prosody (Arud)",
      level: "Beginner",
      duration: "8 weeks",
      description: "Learn the foundations of Arabic poetic meters and how to scan classical poetry.",
      topics: ["16 Traditional Meters", "Taf'ilah System", "Poetic Scanning", "Practical Exercises"]
    },
    {
      title: "Classical Poets & Their Works",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Study major classical poets and analyze their most famous works in historical context.",
      topics: ["Major Poets Study", "Historical Context", "Thematic Analysis", "Linguistic Features"]
    },
    {
      title: "Modern Arabic Poetry",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Explore contemporary Arabic poetry movements and experimental forms.",
      topics: ["Modernist Movements", "Free Verse", "Political Poetry", "Women Poets"]
    },
    {
      title: "Islamic Spiritual Poetry",
      level: "All Levels",
      duration: "4 weeks",
      description: "Study poetry focused on spiritual themes, Prophet's praise, and Islamic values.",
      topics: ["Madih Nabawi", "Tasawwuf Poetry", "Spiritual Themes", "Recitation Practice"]
    },
    {
      title: "Poetry Composition Workshop",
      level: "Advanced",
      duration: "12 weeks",
      description: "Hands-on workshop for writing your own Arabic poetry with expert feedback.",
      topics: ["Creative Writing", "Meter Application", "Thematic Development", "Peer Review"]
    },
    {
      title: "Poetry Recitation & Performance",
      level: "All Levels",
      duration: "5 weeks",
      description: "Learn the art of poetic recitation with proper pronunciation and emotional delivery.",
      topics: ["Tajweed for Poetry", "Emotional Expression", "Performance Skills", "Public Recitation"]
    }
  ]

  const benefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Enhanced Language Skills",
      description: "Deepen your understanding of Arabic vocabulary, grammar, and linguistic nuances."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cultural Appreciation",
      description: "Connect with Arab cultural heritage and historical narratives through poetry."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Expression",
      description: "Develop your ability to express complex thoughts and emotions in Arabic."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Spiritual Enrichment",
      description: "Experience spiritual growth through Islamic and devotional poetry."
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Literary Analysis",
      description: "Master the skills to analyze and appreciate Arabic literary artistry."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Composition Skills",
      description: "Learn to compose your own poetry following classical and modern traditions."
    }
  ]

  const famousPoets = [
    {
      name: "Imru' al-Qais",
      period: "Pre-Islamic",
      contribution: "Master of the Mu'allaqat (hanging poems), founder of classical Arabic poetry tradition",
      famousWork: "Mu'allaqa (The Hanging Poem)"
    },
    {
      name: "Al-Mutanabbi",
      period: "Abbasid Era",
      contribution: "Greatest Arabic poet, known for his powerful language and philosophical depth",
      famousWork: "Diwan Al-Mutanabbi"
    },
    {
      name: "Abu Tammam",
      period: "Abbasid Era",
      contribution: "Compiler of Hamasah anthology, master of intricate poetic devices",
      famousWork: "Al-Hamasah"
    },
    {
      name: "Al-Ma'arri",
      period: "Abbasid Era",
      contribution: "Blind poet-philosopher known for his skepticism and linguistic innovation",
      famousWork: "Luzumiyyat"
    },
    {
      name: "Mahmoud Darwish",
      period: "Modern",
      contribution: "Palestinian poet, symbol of resistance and national identity",
      famousWork: "Identity Card"
    },
    {
      name: "Nizar Qabbani",
      period: "Modern",
      contribution: "Revolutionary love poet who modernized Arabic love poetry",
      famousWork: "Qasa'id min Nizar Qabbani"
    }
  ]

  const samplePoem = {
    arabic: `قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ
    بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ
    فَتُوْضِحَ فَالْمُقْرَاةِ لَمْ يَعْفُ رَسْمُهَا
    لِمَا نَسَجَتْهَا مِنْ جَنُوبٍ وَشَمْأَلِ`,
    translation: `Let us halt at the memory of a beloved and a dwelling,
    At the twisting sand dune between Ad-Dakhool and Hawmal,
    And at Toodih and Al-Miqraat - their traces have not been erased
    By the south and north winds that have woven over them.`,
    poet: "Imru' al-Qais",
    explanation: "Opening verses from the Mu'allaqa, showing classical Arabic poetic structure with its characteristic nasib (amatory prelude) and precise desert imagery."
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="gap-2 group"
            style={{ color: '#0A5C36' }}
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </Button>
        </div>

        {/* Header with Arabic Calligraphy */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-6">
            <Badge 
              className="px-6 py-2 text-sm font-semibold mb-4 animate-pulse"
              style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
            >
              <PenTool className="h-4 w-4 inline mr-2" />
              Literary Arts Service
            </Badge>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#0A5C36' }}
          >
            Dhaat Arabic Poetry
          </h1>
          
          <div 
            className="text-2xl md:text-3xl font-arabic mb-8 py-4 px-8 rounded-2xl inline-block"
            style={{ 
              backgroundColor: '#E8F5E9',
              color: '#0A5C36',
              fontFamily: "'Noto Naskh Arabic', serif",
              direction: 'rtl'
            }}
          >
            الشعر العربي: جسر بين التراث والحداثة
          </div>
          
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mt-6"
            style={{ color: '#1F2A24' }}
          >
            Explore the depth and beauty of Arabic poetry—from classical masterpieces to contemporary expressions
          </p>
        </div>

        {/* Main Content Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="classical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8" style={{ backgroundColor: '#E8F5E9' }}>
              {poetryTypes.map((type) => (
                <TabsTrigger 
                  key={type.id}
                  value={type.id}
                  className="data-[state=active]:bg-[#0A5C36] data-[state=active]:text-white"
                  onClick={() => setActiveTab(type.id)}
                >
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {poetryTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 
                      className="text-3xl font-bold mb-6"
                      style={{ color: '#0A5C36' }}
                    >
                      {type.name}
                    </h2>
                    <p 
                      className="text-lg mb-6 leading-relaxed"
                      style={{ color: '#1F2A24' }}
                    >
                      {type.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <h3 
                        className="text-xl font-semibold"
                        style={{ color: '#0A5C36' }}
                      >
                        Key Features:
                      </h3>
                      <ul className="space-y-3">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1">
                              <Quote className="h-4 w-4" style={{ color: '#0A5C36' }} />
                            </div>
                            <span style={{ color: '#1F2A24' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      size="lg"
                      className="gap-2"
                      style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                      asChild
                    >
                      <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-5 w-5" />
                        Start Learning {type.name}
                      </a>
                    </Button>
                  </div>
                  
                  <div 
                    className="rounded-2xl p-8"
                    style={{ backgroundColor: '#E8F5E9' }}
                  >
                    <h3 
                      className="text-2xl font-bold mb-6 text-center"
                      style={{ color: '#0A5C36' }}
                    >
                      Sample from this Category
                    </h3>
                    <div className="space-y-6">
                      <div 
                        className="text-right p-6 rounded-xl"
                        style={{ 
                          backgroundColor: '#F6F8F5',
                          fontFamily: "'Noto Naskh Arabic', serif",
                          fontSize: '1.5rem',
                          lineHeight: '2.5rem',
                          color: '#0A5C36'
                        }}
                      >
                        {samplePoem.arabic}
                      </div>
                      <div className="space-y-3">
                        <div className="text-sm uppercase tracking-wider font-semibold" style={{ color: '#0A5C36' }}>
                          Translation
                        </div>
                        <p className="italic" style={{ color: '#1F2A24' }}>
                          &quot;{samplePoem.translation}&quot;
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold" style={{ color: '#0A5C36' }}>
                            Poet: {samplePoem.poet}
                          </span>
                          <Badge style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}>
                            Classical
                          </Badge>
                        </div>
                        <p className="text-sm mt-3" style={{ color: '#1F2A24' }}>
                          {samplePoem.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <Separator className="my-12" style={{ backgroundColor: '#E8F5E9' }} />

        {/* Courses Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8" style={{ color: '#0A5C36' }} />
              <h2 
                className="text-3xl font-bold"
                style={{ color: '#0A5C36' }}
              >
                Poetry Courses & Workshops
              </h2>
            </div>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#1F2A24' }}
            >
              Structured learning programs designed for all levels—from beginners to advanced poets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      className="mb-2"
                      style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#0A5C36' }}>
                      <Calendar className="h-3 w-3" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg" style={{ color: '#0A5C36' }}>
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription style={{ color: '#1F2A24' }}>
                    {course.description}
                  </CardDescription>
                  
                  <div>
                    <h4 
                      className="font-semibold mb-2 text-sm"
                      style={{ color: '#0A5C36' }}
                    >
                      Topics Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full gap-2"
                    style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                    asChild
                  >
                    <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                      <PenTool className="h-4 w-4" />
                      Enroll Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Benefits of Studying Arabic Poetry
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#1F2A24' }}
            >
              Beyond linguistic mastery, poetry offers profound personal and cultural enrichment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <div className="mb-4" style={{ color: '#0A5C36' }}>
                  {benefit.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#0A5C36' }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: '#1F2A24' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Famous Poets Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="h-8 w-8" style={{ color: '#0A5C36' }} />
              <h2 
                className="text-3xl font-bold"
                style={{ color: '#0A5C36' }}
              >
                Masters of Arabic Poetry
              </h2>
            </div>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#1F2A24' }}
            >
              Study with guidance inspired by the greatest poets in Arabic literary history
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {famousPoets.map((poet, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#F6F8F5' }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle style={{ color: '#0A5C36' }}>
                      {poet.name}
                    </CardTitle>
                    <Badge style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}>
                      {poet.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 
                      className="font-semibold mb-1 text-sm"
                      style={{ color: '#0A5C36' }}
                    >
                      Contribution:
                    </h4>
                    <p className="text-sm" style={{ color: '#1F2A24' }}>
                      {poet.contribution}
                    </p>
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-1 text-sm"
                      style={{ color: '#0A5C36' }}
                    >
                      Famous Work:
                    </h4>
                    <p className="text-sm italic" style={{ color: '#1F2A24' }}>
                      {poet.famousWork}
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 mt-2"
                    style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
                  >
                    <BookOpen className="h-3 w-3" />
                    Study Their Works
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Methodology */}
        <div 
          className="rounded-2xl p-8 md:p-12 mb-16"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#F6F8F5' }}
          >
            Our Teaching Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>1</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Text Analysis
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Close reading and linguistic analysis of classical and modern texts
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>2</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Historical Context
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Understanding poetry within its cultural and historical framework
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>3</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Practical Application
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Writing exercises and composition practice with expert feedback
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>4</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Performance Skills
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Developing recitation and public presentation abilities
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div 
            className="inline-block p-8 rounded-2xl mb-8 max-w-3xl mx-auto"
            style={{ backgroundColor: '#E8F5E9' }}
          >
            <Quote className="h-12 w-12 mx-auto mb-4" style={{ color: '#0A5C36' }} />
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#0A5C36' }}
            >
              Begin Your Poetic Journey
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: '#1F2A24' }}
            >
              Whether you&apos;re a beginner or experienced, discover the transformative power of Arabic poetry
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gap-2 px-8"
                style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                asChild
              >
                <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 px-8"
                style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
                asChild
              >
                <a href="tel:09132030346">
                  <Phone className="h-5 w-5" />
                  Call for Details
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: '#0A5C36/20' }}>
              <div className="text-sm" style={{ color: '#1F2A24' }}>
                <Users className="h-4 w-4 inline mr-2" />
                Join our community of poetry enthusiasts and scholars
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}