'use client'

import { Shield, Clock, Globe, Users, Award, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: Shield,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency medical assistance and coordination services.',
    color: 'primary'
  },
  {
    icon: Clock,
    title: 'Rapid Response Time',
    description: 'Average response time of less than 15 minutes for emergency situations.',
    color: 'accent'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Medical assistance services available in over 150 countries worldwide.',
    color: 'secondary'
  },
  {
    icon: Users,
    title: 'Expert Medical Team',
    description: 'Experienced healthcare professionals and medical coordinators.',
    color: 'primary'
  },
  {
    icon: Award,
    title: 'Certified & Accredited',
    description: 'Internationally recognized medical assistance and evacuation services.',
    color: 'accent'
  },
  {
    icon: Phone,
    title: 'Multi-Channel Support',
    description: 'Phone, email, and digital platform support for all your needs.',
    color: 'secondary'
  }
]

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}

      </div>
    </section>
  )
}
