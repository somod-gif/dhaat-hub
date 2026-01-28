"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Mic, Headphones, PlayCircle, Download, Share2, Clock, Users, Calendar, BookOpen, Volume2, Radio, Music, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function MediaClient() {
  const [activeTab, setActiveTab] = useState("podcast")

  const podcastCategories = [
    { id: "all", label: "All Episodes" },
    { id: "business", label: "Business & Wealth" },
    { id: "spiritual", label: "Spiritual Growth" },
    { id: "community", label: "Community" },
    { id: "lifestyle", label: "Islamic Lifestyle" }
  ]

  const podcastEpisodes = [
    {
      id: 1,
      title: "Islamic Principles in Modern Business",
      description: "Exploring how traditional Islamic business ethics apply to contemporary entrepreneurship and halal wealth creation strategies.",
      duration: "45 min",
      category: "business",
      date: "Mar 15, 2024",
      guests: ["Ustadh Ahmed Musa", "Dr. Fatima Bello"],
      featured: true
    },
    {
      id: 2,
      title: "Wealth Creation with Barakah",
      description: "Understanding how to build sustainable wealth while maintaining spiritual blessings and ethical financial practices.",
      duration: "38 min",
      category: "business",
      date: "Mar 8, 2024",
      guests: ["Shaykh Ibrahim"],
      featured: false
    },
    {
      id: 3,
      title: "Community Development Strategies",
      description: "Practical approaches to building stronger Muslim communities in the modern world while preserving Islamic values.",
      duration: "52 min",
      category: "community",
      date: "Mar 1, 2024",
      guests: ["Imam Yusuf", "Sister Aisha"],
      featured: true
    },
    {
      id: 4,
      title: "Balancing Dunya and Akhirah",
      description: "Finding harmony between worldly responsibilities and spiritual aspirations in daily Muslim life.",
      duration: "41 min",
      category: "spiritual",
      date: "Feb 23, 2024",
      guests: ["Dr. Muhammad Ali"],
      featured: false
    },
    {
      id: 5,
      title: "Islamic Parenting in Digital Age",
      description: "Guidance on raising children with strong Islamic identity while navigating modern technology challenges.",
      duration: "48 min",
      category: "lifestyle",
      date: "Feb 16, 2024",
      guests: ["Umm Khadijah", "Brother Hamza"],
      featured: true
    },
    {
      id: 6,
      title: "Entrepreneurship with Islamic Ethics",
      description: "Starting and growing businesses while maintaining Islamic principles of fairness, honesty, and social responsibility.",
      duration: "44 min",
      category: "business",
      date: "Feb 9, 2024",
      guests: ["Entrepreneur Sarah"],
      featured: false
    }
  ]

  const audiobooks = [
    {
      id: 1,
      title: "The Path to Islamic Entrepreneurship",
      description: "A comprehensive guide to starting and growing businesses with Islamic principles, from ideation to scaling.",
      chapters: "12 chapters",
      format: "Audio Series",
      duration: "8 hours",
      author: "Dr. Abdul Rahman",
      featured: true,
      category: "business"
    },
    {
      id: 2,
      title: "Quranic Wisdom for Daily Life",
      description: "Practical applications of Quranic teachings in modern personal and professional contexts for holistic living.",
      chapters: "8 chapters",
      format: "Lectures",
      duration: "6 hours",
      author: "Shaykh Muhammad",
      featured: true,
      category: "spiritual"
    },
    {
      id: 3,
      title: "Islamic Financial Literacy",
      description: "Understanding Islamic finance, investments, and wealth management from basics to advanced concepts.",
      chapters: "10 chapters",
      format: "Educational Series",
      duration: "7.5 hours",
      author: "Ustadh Ahmed",
      featured: false,
      category: "business"
    },
    {
      id: 4,
      title: "Prophetic Leadership Lessons",
      description: "Leadership principles derived from the life and teachings of Prophet Muhammad (PBUH) for modern leaders.",
      chapters: "6 chapters",
      format: "Leadership Guide",
      duration: "5 hours",
      author: "Dr. Fatima Yusuf",
      featured: false,
      category: "personal-development"
    },
    {
      id: 5,
      title: "The Art of Islamic Communication",
      description: "Mastering effective communication skills based on Quranic guidance and Prophetic examples.",
      chapters: "9 chapters",
      format: "Audio Course",
      duration: "6.5 hours",
      author: "Ustadh Khalid",
      featured: false,
      category: "personal-development"
    },
    {
      id: 6,
      title: "Fiqh of Contemporary Issues",
      description: "Islamic legal perspectives on modern challenges including technology, finance, and social interactions.",
      chapters: "7 chapters",
      format: "Scholarly Lectures",
      duration: "5.5 hours",
      author: "Mufti Ibrahim",
      featured: true,
      category: "education"
    }
  ]

  const platforms = [
    { name: "Spotify", icon: <Music className="h-5 w-5" />, color: "#1DB954" },
    { name: "Apple Podcasts", icon: <Radio className="h-5 w-5" />, color: "#FC3C44" },
    { name: "Google Podcasts", icon: <Radio className="h-5 w-5" />, color: "#4285F4" },
    { name: "YouTube", icon: <PlayCircle className="h-5 w-5" />, color: "#FF0000" }
  ]

  const filteredPodcasts = activeTab === "all" 
    ? podcastEpisodes 
    : podcastEpisodes.filter(episode => episode.category === activeTab)

  const featuredAudiobooks = audiobooks.filter(book => book.featured)
  const otherAudiobooks = audiobooks.filter(book => !book.featured)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0A5C36] rounded-full blur-lg opacity-20"></div>
              <Radio className="h-12 w-12 relative" style={{ color: '#0A5C36' }} />
            </div>
            <h1 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#0A5C36' }}
            >
              Dhaat Media
            </h1>
          </div>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#1F2A24' }}
          >
            Islamic audio content for learning, inspiration, and personal growth on the go
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-12">
          <Tabs defaultValue="podcast" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8" style={{ backgroundColor: '#E8F5E9' }}>
              <TabsTrigger 
                value="podcast" 
                className="data-[state=active]:bg-[#0A5C36] data-[state=active]:text-white"
                onClick={() => setActiveTab("podcast")}
              >
                <Mic className="h-4 w-4 mr-2" />
                Podcast
              </TabsTrigger>
              <TabsTrigger 
                value="audiobook"
                className="data-[state=active]:bg-[#0A5C36] data-[state=active]:text-white"
                onClick={() => setActiveTab("audiobook")}
              >
                <Headphones className="h-4 w-4 mr-2" />
                Audiobook
              </TabsTrigger>
            </TabsList>

            {/* Podcast Content */}
            <TabsContent value="podcast" className="space-y-12">
              {/* Podcast Introduction */}
              <section id="podcast" className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Mic className="h-8 w-8" style={{ color: '#0A5C36' }} />
                      <h2 
                        className="text-3xl font-bold"
                        style={{ color: '#0A5C36' }}
                      >
                        Dhaat Podcast
                      </h2>
                    </div>
                    
                    <p 
                      className="text-lg mb-6"
                      style={{ color: '#1F2A24' }}
                    >
                      Engaging conversations about Islam, business, wealth creation, lifestyle, 
                      and community development. Join us for insightful discussions with scholars, 
                      entrepreneurs, and community leaders.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <Calendar className="h-3 w-3 mr-1" />
                        Weekly Episodes
                      </Badge>
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <Users className="h-3 w-3 mr-1" />
                        Expert Guests
                      </Badge>
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <Volume2 className="h-3 w-3 mr-1" />
                        Practical Insights
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="gap-2 w-full sm:w-auto"
                        style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                        asChild
                      >
                        <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                          <PlayCircle className="h-5 w-5" />
                          Get Podcast Links
                        </a>
                      </Button>
                      <div className="text-sm" style={{ color: '#1F2A24' }}>
                        Available on all major podcast platforms
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: '#E8F5E9' }}
                  >
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: '#0A5C36' }}
                    >
                      Featured Episode
                    </h3>
                    {podcastEpisodes.find(ep => ep.featured) && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 
                            className="font-bold text-lg"
                            style={{ color: '#0A5C36' }}
                          >
                            {podcastEpisodes.find(ep => ep.featured)?.title}
                          </h4>
                          <Badge 
                            style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                          >
                            Featured
                          </Badge>
                        </div>
                        <p 
                          className="text-sm"
                          style={{ color: '#1F2A24' }}
                        >
                          {podcastEpisodes.find(ep => ep.featured)?.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1" style={{ color: '#0A5C36' }}>
                            <Clock className="h-3 w-3" />
                            {podcastEpisodes.find(ep => ep.featured)?.duration}
                          </span>
                          <span style={{ color: '#0A5C36' }}>
                            {podcastEpisodes.find(ep => ep.featured)?.date}
                          </span>
                        </div>
                        <Button 
                          className="w-full gap-2"
                          style={{ backgroundColor: '#C7FF1A', color: '#1F2A24' }}
                        >
                          <PlayCircle className="h-4 w-4" />
                          Listen Now
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Podcast Categories */}
              <div className="mb-8">
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#0A5C36' }}
                >
                  Browse by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {podcastCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeTab === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab(category.id)}
                      className={
                        activeTab === category.id 
                          ? "bg-[#0A5C36] text-white" 
                          : "border-[#0A5C36] text-[#0A5C36] hover:bg-[#E8F5E9]"
                      }
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Podcast Episodes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredPodcasts.map((episode) => (
                  <Card 
                    key={episode.id}
                    className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 ${episode.featured ? 'border-l-4' : ''}`}
                    style={{ 
                      backgroundColor: '#F6F8F5',
                      borderLeftColor: episode.featured ? '#0A5C36' : 'transparent',
                      borderLeftWidth: episode.featured ? '4px' : '0'
                    }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge 
                          className="mb-2"
                          style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}
                        >
                          {episode.category.charAt(0).toUpperCase() + episode.category.slice(1)}
                        </Badge>
                        {episode.featured && (
                          <Badge 
                            style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                          >
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#0A5C36' }}>
                        {episode.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription style={{ color: '#1F2A24' }}>
                        {episode.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm" style={{ color: '#0A5C36' }}>
                          <Clock className="h-3 w-3" />
                          <span>{episode.duration}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="h-3 w-3" />
                          <span>{episode.date}</span>
                        </div>
                        
                        {episode.guests && episode.guests.length > 0 && (
                          <div className="flex items-center gap-2 text-sm" style={{ color: '#1F2A24' }}>
                            <Users className="h-3 w-3" />
                            <span className="font-medium">Guests:</span>
                            <span>{episode.guests.join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm"
                          className="flex-1 gap-2"
                          style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                        >
                          <PlayCircle className="h-3 w-3" />
                          Play
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="gap-2"
                          style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
                        >
                          <Share2 className="h-3 w-3" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Podcast Platforms */}
              <div className="mb-12">
                <h3 
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ color: '#0A5C36' }}
                >
                  Available On
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {platforms.map((platform) => (
                    <Card 
                      key={platform.name}
                      className="border-none text-center hover:shadow-lg transition-shadow duration-300"
                      style={{ backgroundColor: '#F6F8F5' }}
                    >
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-4">
                          <div style={{ color: platform.color }}>
                            {platform.icon}
                          </div>
                        </div>
                        <p className="font-medium" style={{ color: '#0A5C36' }}>
                          {platform.name}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Audiobook Content */}
            <TabsContent value="audiobook" className="space-y-12">
              {/* Audiobook Introduction */}
              <section id="audiobook" className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div 
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: '#E8F5E9' }}
                  >
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: '#0A5C36' }}
                    >
                      Featured Titles
                    </h3>
                    <div className="space-y-6">
                      {featuredAudiobooks.map((book) => (
                        <Card 
                          key={book.id}
                          className="border-none"
                          style={{ backgroundColor: '#F6F8F5' }}
                        >
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg" style={{ color: '#0A5C36' }}>
                                {book.title}
                              </CardTitle>
                              <Badge style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}>
                                Featured
                              </Badge>
                            </div>
                            <CardDescription style={{ color: '#1F2A24' }}>
                              {book.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                                {book.format}
                              </Badge>
                              <div className="flex items-center gap-2 text-sm" style={{ color: '#0A5C36' }}>
                                <Clock className="h-3 w-3" />
                                <span>{book.duration}</span>
                              </div>
                            </div>
                            <div className="mt-3 text-sm" style={{ color: '#1F2A24' }}>
                              <span className="font-medium">Author:</span> {book.author}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Headphones className="h-8 w-8" style={{ color: '#0A5C36' }} />
                      <h2 
                        className="text-3xl font-bold"
                        style={{ color: '#0A5C36' }}
                      >
                        Dhaat Audiobook
                      </h2>
                    </div>
                    
                    <p 
                      className="text-lg mb-6"
                      style={{ color: '#1F2A24' }}
                    >
                      Deepen your Islamic knowledge through carefully curated audio learning resources. 
                      Our audiobook collection includes lectures, educational series, and comprehensive 
                      guides on various aspects of Islamic life and learning.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <BookOpen className="h-3 w-3 mr-1" />
                        Scholarly Content
                      </Badge>
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <Headphones className="h-3 w-3 mr-1" />
                        Structured Learning
                      </Badge>
                      <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                        <Download className="h-3 w-3 mr-1" />
                        Mobile Friendly
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="gap-2 w-full sm:w-auto"
                        style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                        asChild
                      >
                        <a href="https://wa.me/2348172486346" target="_blank" rel="noopener noreferrer">
                          <Headphones className="h-5 w-5" />
                          Request Audiobook Access
                        </a>
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="gap-2 w-full sm:w-auto"
                        style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
                      >
                        <Download className="h-5 w-5" />
                        Download Sample
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Other Audiobooks */}
              <div>
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#0A5C36' }}
                >
                  More Audiobooks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherAudiobooks.map((book) => (
                    <Card 
                      key={book.id}
                      className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                      style={{ backgroundColor: '#F6F8F5' }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg" style={{ color: '#0A5C36' }}>
                          {book.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription style={{ color: '#1F2A24' }}>
                          {book.description}
                        </CardDescription>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <Badge style={{ backgroundColor: '#E8F5E9', color: '#0A5C36' }}>
                              {book.category}
                            </Badge>
                            <span style={{ color: '#0A5C36' }}>{book.chapters}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1" style={{ color: '#1F2A24' }}>
                              <Clock className="h-3 w-3" />
                              {book.duration}
                            </span>
                            <span style={{ color: '#1F2A24' }}>By {book.author}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            className="flex-1 gap-2"
                            style={{ backgroundColor: '#0A5C36', color: '#F6F8F5' }}
                          >
                            <PlayCircle className="h-3 w-3" />
                            Preview
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="gap-2"
                            style={{ borderColor: '#0A5C36', color: '#0A5C36' }}
                          >
                            <Headphones className="h-3 w-3" />
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Separator className="my-12" style={{ backgroundColor: '#E8F5E9' }} />

        {/* Platform Info */}
        <div 
          className="rounded-2xl p-8 md:p-12 mb-16"
          style={{ backgroundColor: '#0A5C36' }}
        >
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#F6F8F5' }}
          >
            Why Choose Dhaat Media?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>100%</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Halal Content
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                All content reviewed for Islamic authenticity and scholarly approval
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>24/7</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Access Anywhere
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Listen anytime, anywhere on your preferred device
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#C7FF1A' }}>Free</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#F6F8F5' }}
              >
                Community Access
              </h3>
              <p style={{ color: '#E8F5E9' }}>
                Available to all members of our growing community
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              style={{ color: '#F6F8F5' }}
            >
              Start your journey of Islamic learning and inspiration today
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
                  Get Access Links
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
                style={{ borderColor: '#F6F8F5', color: '#0A5C36' }}
                onClick={() => setActiveTab("podcast")}
              >
                <PlayCircle className="h-5 w-5" />
                Browse Podcast
              </Button>
            </div>
          </div>
        </div>

        {/* Subscription Info */}
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#0A5C36' }}
          >
            How to Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>1</div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: '#0A5C36' }}
              >
                Contact Support
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Message us on WhatsApp for platform links
              </p>
            </div>
            <div 
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>2</div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: '#0A5C36' }}
              >
                Choose Platform
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Select your preferred listening platform
              </p>
            </div>
            <div 
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>3</div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: '#0A5C36' }}
              >
                Subscribe
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Subscribe to our channels for updates
              </p>
            </div>
            <div 
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#0A5C36' }}>4</div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: '#0A5C36' }}
              >
                Start Listening
              </h3>
              <p style={{ color: '#1F2A24' }}>
                Enjoy our content anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}