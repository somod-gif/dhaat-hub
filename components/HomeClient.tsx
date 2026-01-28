/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Mic,
  Truck,
  Shirt,
  Shield,
  Headphones,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function HomeClient() {
  const services = [
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Dhaat Wears",
      description:
        "Islamic-compliant clothing focused on modesty, quality, and Muslim identity.",
      href: "/services/wears",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Dhaat Logistics",
      description:
        "Reliable logistics and delivery solutions built on efficiency and trust.",
      href: "/services/logistics",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dhaat Laundry",
      description:
        "Professional laundry services with care, cleanliness, and respect.",
      href: "/services/laundry",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dhaat Support",
      description:
        "Customer assistance and operational support that's responsive and respectful.",
      href: "/services/support",
    },
  ]

  const classes = [
    {
      title: "Arabiyah Classes",
      description:
        "Arabic language learning focused on understanding the Qur'an and Islamic texts.",
      badge: "Language",
      href: "/classes#arabiyah",
    },
    {
      title: "Business & Wealth Creation",
      description:
        "Ethical business education rooted in Islamic principles and financial discipline.",
      badge: "Business",
      href: "/classes#business",
    },
    {
      title: "Entrepreneurship Development",
      description:
        "Practical guidance for starting, growing, and managing halal businesses.",
      badge: "Entrepreneurship",
      href: "/classes#entrepreneurship",
    },
  ]

  const media = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Dhaat Podcast",
      description:
        "Conversations on Islam, business, wealth, lifestyle, and community growth.",
      href: "/media#podcast",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Dhaat Audiobook",
      description:
        "Audio learning resources, lectures, and knowledge-based materials.",
      href: "/media#audiobook",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F6F8F5] relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0A5C36] blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#0A5C36] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#E8F5E9] blur-3xl"></div>
      </div>

      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9]/20 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0A5C36]/10 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 border-2 border-[#0A5C36]/10 rounded-3xl rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border-2 border-[#0A5C36]/10 rounded-2xl -rotate-12"></div>
      </div>

      {/* HERO */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center relative"
        >
          {/* Hero background card */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#E8F5E9]/40 to-transparent rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40"></div>
          </div>

          <div className="relative z-10 px-8 py-12">
            <Badge className="mb-6 bg-gradient-to-r from-[#E8F5E9] to-[#d4edda] text-[#0A5C36] font-semibold border border-[#0A5C36]/20">
              Islamic Services & Education Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1F2A24] mb-6">
              Building{" "}
              <span className="text-[#0A5C36] relative inline-block">
                <span className="relative z-10">Islamic Excellence</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#E8F5E9]/70 -z-0"></span>
              </span>{" "}
              in Every Aspect of Life
            </h1>

            <p className="text-xl md:text-2xl text-[#1F2A24]/90 mb-10 max-w-3xl mx-auto">
              A unified platform combining authentic Islamic knowledge,
              ethical services, and community development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-gradient-to-r from-[#0A5C36] to-[#0d7a46] text-[#F6F8F5] hover:shadow-lg hover:shadow-[#0A5C36]/20 transition-all duration-300"
                asChild
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36]/10 hover:shadow-md transition-all duration-300"
                asChild
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#0A5C36] to-transparent"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A24]">
                Our Services
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#0A5C36] to-transparent"></div>
            </div>
            <p className="text-xl text-[#1F2A24]/80">
              Purpose-built solutions grounded in Islamic values
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Card accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A5C36] to-[#E8F5E9]"></div>
                  
                  <CardHeader className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#E8F5E9]/30 rounded-full blur-md"></div>
                    <div className="mb-6 p-4 bg-gradient-to-br from-[#E8F5E9] to-white rounded-2xl inline-block shadow-sm">
                      <div className="text-[#0A5C36]">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-[#0A5C36] text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#1F2A24]/80 mb-8 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#0A5C36] font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-[#0A5C36] transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="px-4 py-20 relative z-10">
        {/* Background pattern for classes section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E9] via-[#F6F8F5] to-[#E8F5E9] -z-10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-1/4 w-64 h-64 border-4 border-[#0A5C36] rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-[#0A5C36] rounded-full"></div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4 text-[#0A5C36]">
              <div className="p-3 bg-gradient-to-br from-[#E8F5E9] to-white rounded-xl shadow-sm">
                <BookOpen className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A24]">
                Educational Classes
              </h2>
            </div>
            <p className="text-xl text-[#1F2A24]/80">
              Knowledge, discipline, and ethical growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {classes.map((cls, i) => (
              <motion.div
                key={cls.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative rounded-3xl bg-gradient-to-b from-white to-[#F6F8F5] p-8 border border-[#E8F5E9] hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0A5C36]/5 to-transparent rounded-tr-3xl"></div>
                  
                  <Badge className="mb-6 bg-gradient-to-r from-[#E8F5E9] to-[#d4edda] text-[#0A5C36] border border-[#0A5C36]/20">
                    {cls.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#0A5C36] mb-4">
                    {cls.title}
                  </h3>
                  <p className="text-[#1F2A24]/80 mb-8 leading-relaxed">
                    {cls.description}
                  </p>
                  <Link
                    href={cls.href}
                    className="inline-flex items-center text-[#0A5C36] font-medium group-hover:gap-2 transition-all duration-300"
                  >
                    <span className="relative">
                      Explore Class
                      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-[#0A5C36] transition-all duration-300"></span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="px-4 py-20 relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A24] mb-4">
              Media & Content
            </h2>
            <p className="text-xl text-[#1F2A24]/80">
              Learn anywhere, anytime
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-[#0A5C36] to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {media.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-white/90 to-[#F6F8F5]/90 backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Media card accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#0A5C36]/10 to-transparent rounded-full blur-lg"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-[#E8F5E9] to-white rounded-xl shadow-sm">
                        <div className="text-[#0A5C36]">
                          {item.icon}
                        </div>
                      </div>
                      <CardTitle className="text-[#0A5C36] text-2xl">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#1F2A24]/80 mb-8 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-[#0A5C36] font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      <span className="relative">
                        Listen Now
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-[#0A5C36] transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A5C36]/10 via-[#E8F5E9]/30 to-[#0A5C36]/10"></div>
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            
            <div className="relative z-10 text-center px-8 py-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F2A24] mb-6">
                Join Our Community Today
              </h3>
              <p className="text-xl text-[#1F2A24]/80 mb-10 max-w-2xl mx-auto">
                Experience Islamic excellence in services, education, and community development.
              </p>
              <Button
                size="lg"
                className="px-10 py-7 text-lg bg-gradient-to-r from-[#0A5C36] to-[#0d7a46] text-[#F6F8F5] hover:shadow-xl hover:shadow-[#0A5C36]/30 transition-all duration-300"
                asChild
              >
                <Link href="/join">
                  Get Started
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}