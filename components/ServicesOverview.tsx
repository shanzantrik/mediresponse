'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Globe, Plane, Wifi, Users, GraduationCap, Heart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    id: 'event-medical',
    title: 'Event Medical Solutions',
    description: 'Comprehensive medical support for events, concerts, and large gatherings.',
    image: '/DSCF7423-scaled.jpg',
    icon: Users,
    color: 'primary'
  },
  {
    id: 'aeromedical-evacuation',
    title: 'Aeromedical Evacuation Solutions',
    description: 'Emergency air medical transport with ICU-level care and expert teams.',
    image: '/Aeromedical.jpg',
    icon: Plane,
    color: 'accent'
  },
  {
    id: 'global-assistance',
    title: 'Global Assistance Services',
    description: 'Worldwide medical assistance and emergency response coordination.',
    image: '/DSCF7434-scaled.jpg',
    icon: Globe,
    color: 'secondary'
  },
  {
    id: 'remote-medical',
    title: 'Remote Medical Solutions',
    description: 'Telemedicine and remote medical support for isolated locations.',
    image: '/Remote-Site-Scrolling-1.jpg',
    icon: Wifi,
    color: 'primary'
  },
  {
    id: 'training',
    title: 'Medical & Safety Training',
    description: 'Professional medical and safety training programs for organizations.',
    image: '/Training-Scrolling-scaled.jpg',
    icon: GraduationCap,
    color: 'accent'
  },
  {
    id: 'emergency-services',
    title: 'Emergency Medical Services',
    description: '24/7 emergency medical response and critical care services.',
    image: '/DSCF7423-scaled.jpg',
    icon: Heart,
    color: 'secondary'
  }
]

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive medical assistance and evacuation services designed to meet your healthcare needs anywhere in the world.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' :
                index === 1 ? 'md:col-span-1 lg:col-span-1' :
                index === 2 ? 'md:col-span-1 lg:col-span-1' :
                index === 3 ? 'md:col-span-2 lg:col-span-1' :
                index === 4 ? 'md:col-span-1 lg:col-span-1' :
                'md:col-span-1 lg:col-span-1'
              }`}
            >
              <Link href={`/${service.id}`} className="block h-full">
                {/* Background Image */}
                <div className="relative h-64 md:h-72 lg:h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <service.icon className="w-6 h-6 text-red-500 dark:text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center space-x-2 text-primary-300 font-semibold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
