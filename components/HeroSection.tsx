'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Clock, Shield, Heart, Users, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const heroSlides = [
  {
    title: "Emergency Medical Care",
    subtitle: "Life Matters, People Come First",
    description: "MediResponse delivers integrated medical care and safety solutions that prioritise the well-being of your workforce and the resilience of your operations.",
    bgImage: "/077-FireOps.jpg",
    icon: Shield
  },
  {
    title: "24/7 Global Assistance",
    subtitle: "When Your Life Depends on It",
    description: "Our 24/7 global assistance services provide emergency medical coordination, telemedicine, and travel support worldwide.",
    bgImage: "/DSCF7434-scaled.jpg",
    icon: Heart
  },
  {
    title: "Aeromedical Evacuation",
    subtitle: "Expert Clinical Teams",
    description: "We offer aeromedical evacuation from remote regions, with ICU-level in-flight care and expert clinical teams.",
    bgImage: "/Aeromedical.jpg",
    icon: Users
  },
  {
    title: "Remote Medical Solutions",
    subtitle: "Advanced Telemedicine",
    description: "Cutting-edge telemedicine and remote medical support services for locations with limited access to healthcare facilities.",
    bgImage: "/Remote-Site-Scrolling-1.jpg",
    icon: Award
  },
  {
    title: "Training & Development",
    subtitle: "Professional Excellence",
    description: "Comprehensive training programs and professional development for medical teams and emergency responders.",
    bgImage: "/Training-Scrolling-scaled.jpg",
    icon: Star
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(236, 31, 38, 0.8) 0%, rgba(41, 71, 157, 0.8) 100%), url(${slide.bgImage})`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-500/30 rounded-full blur-lg"
        />
      </div>

      {/* Hero Text Section */}
      <div className="relative z-10 container-custom pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-left space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    We prioritise the well-being of your workforce and the resilience of your operations. Our services are designed to mitigate risk, respond effectively to medical incidents, and support compliance across diverse sectors and environments.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-left space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Backed by skilled personnel, clinical oversight, and dependable systems, we help organisations remain prepared, responsive, and focused on their core activities.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Emergency Badge and Slide Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-between"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">24/7 Emergency Response</span>
              </div>

              {/* Slide Counter */}
              <div className="text-white/80 text-sm font-medium">
                {currentSlide + 1} / {heroSlides.length}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">{heroSlides[currentSlide].title}</span>
                  <span className="block text-gradient">{heroSlides[currentSlide].subtitle}</span>
                </h1>

                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 py-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">150+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">24/7</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">5000+</div>
                <div className="text-sm text-gray-300">Successful Evacuations</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary group flex items-center justify-center space-x-2 text-lg px-8 py-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>CALL FOR HELP</span>
                <ArrowRight className={`w-6 h-6 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
              </Link>

              <Link
                href="/services"
                className="btn-outline group flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Our Services</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Emergency Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="emergency-card relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern opacity-10"></div>

              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
              />

              <div className="relative z-10 text-center space-y-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <Phone className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Emergency Hotline</h3>
                  <p className="text-white/90">Available 24/7 for immediate assistance</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-6 h-6 text-white" />
                      <span className="text-2xl font-bold text-white">+27 11 234 5678</span>
                    </div>

                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-white/80" />
                      <span className="text-white/90">info@mediresponse.co.za</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Response Time: &lt; 15 minutes</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-secondary w-full flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/80 text-sm">4.8 Based on 110 reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slider Navigation Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
