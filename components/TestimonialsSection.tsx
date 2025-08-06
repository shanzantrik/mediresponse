'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Corporate Travel Manager',
    company: 'Global Enterprises Ltd',
    content: 'MediResponse provided exceptional service during our emergency evacuation from South Africa. Their team was professional, efficient, and kept us informed throughout the entire process.',
    rating: 5,
    image: 'https://mediresponse.co.za/wp-content/uploads/2024/01/testimonial-1.jpg'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Medical Director',
    company: 'International Medical Group',
    content: 'The aeromedical evacuation service was outstanding. Their medical team ensured safe transport of our critical patient with all necessary equipment and monitoring.',
    rating: 5,
    image: 'https://mediresponse.co.za/wp-content/uploads/2024/01/testimonial-2.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Expatriate Coordinator',
    company: 'Oil & Gas Corporation',
    content: 'Their remote medical solutions have been invaluable for our workers in remote locations. The telemedicine platform is user-friendly and provides excellent medical support.',
    rating: 5,
    image: 'https://mediresponse.co.za/wp-content/uploads/2024/01/testimonial-3.jpg'
  }
]

export default function TestimonialsSection() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by corporations, medical professionals, and individuals worldwide for reliable emergency medical assistance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg card-hover relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary-200">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">ISO</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
