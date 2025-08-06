'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LucideIcon, Stethoscope, UserCheck, Settings, Phone, Building2, Heart } from 'lucide-react'

interface ServiceFeature {
  icon: string
  title: string
  description: string
  color: string
}

const iconMap = {
  Stethoscope,
  UserCheck,
  Settings,
  Phone,
  Building2,
  Heart
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  features: ServiceFeature[]
}

export default function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
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
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {(() => {
                      const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                      return IconComponent ? <IconComponent className="w-10 h-10 text-white" /> : null
                    })()}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
