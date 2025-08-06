'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  stats: Array<{ number: string; label: string }>
}

export default function ServiceHero({ title, subtitle, description, image, stats }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(236, 31, 38, 0.8) 0%, rgba(41, 71, 157, 0.8) 100%), url(${image})`
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="text-primary-200 font-medium">
                {subtitle}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-300">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-accent group flex items-center justify-center space-x-2"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary group flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Emergency Hotline</h3>
                  <p className="text-gray-200">Available 24/7 for immediate assistance</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-300" />
                      <span className="text-xl font-bold text-white">+27 11 234 5678</span>
                    </div>

                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-300" />
                      <span className="text-white">info@mediresponse.co.za</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-primary-200">
                    <span className="text-sm">Response Time: &lt; 15 minutes</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
