import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Award, Globe, Clock } from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import CTASection from '@/components/CTASection'

export default function AboutPage() {
  const heroData = {
    title: 'About MediResponse',
    subtitle: 'Your trusted partner in global medical assistance',
    description: 'MediResponse is a leading provider of comprehensive medical assistance, aeromedical evacuation, and remote medical solutions worldwide. With over a decade of experience, we ensure peace of mind for travelers, expatriates, and organizations operating globally.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { number: '10+', label: 'Years Experience' },
      { number: '150+', label: 'Countries Served' },
      { number: '5000+', label: 'Successful Cases' }
    ]
  }

  const features = [
    {
      icon: "Shield",
      title: 'Mission & Vision',
      description: 'To provide reliable, professional medical assistance services that ensure safety and peace of mind for our clients worldwide.',
      color: 'primary'
    },
    {
      icon: "Users",
      title: 'Expert Team',
      description: 'Our team consists of experienced medical professionals, coordinators, and support staff dedicated to excellence.',
      color: 'accent'
    },
    {
      icon: "Award",
      title: 'Certifications',
      description: 'Internationally recognized certifications and accreditations for medical assistance and evacuation services.',
      color: 'secondary'
    },
    {
      icon: "Globe",
      title: 'Global Network',
      description: 'Extensive network of medical providers, facilities, and partners across 150+ countries worldwide.',
      color: 'primary'
    },
    {
      icon: "Clock",
      title: '24/7 Support',
      description: 'Round-the-clock emergency response and medical coordination services available anytime, anywhere.',
      color: 'accent'
    },
    {
      icon: "Award",
      title: 'Quality Assurance',
      description: 'Rigorous quality standards and continuous improvement processes to ensure the highest level of service.',
      color: 'secondary'
    }
  ]

  return (
    <div className="pt-24 w-full">
      <ServiceHero {...heroData} />

      {/* About Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2014, MediResponse has grown from a local medical assistance provider to a global leader in comprehensive medical support services. Our journey began with a simple mission: to ensure that no one faces a medical emergency alone, regardless of where they are in the world.
                </p>
                <p>
                  Today, we serve clients across 150+ countries, providing everything from emergency medical coordination to complex aeromedical evacuations. Our team of experienced medical professionals and coordinators work tirelessly to ensure the safety and well-being of our clients.
                </p>
                <p>
                  We pride ourselves on our rapid response times, with an average emergency response time of less than 15 minutes. Our global network of medical providers and facilities ensures that we can provide the right care, at the right time, in the right place.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="MediResponse Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures
        title="Why Choose MediResponse"
        subtitle="Professional excellence and unwavering commitment to your safety"
        features={features}
      />

      {/* Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The safety and well-being of our clients is our top priority in every decision we make.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Client-Centered
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We put our clients at the center of everything we do, providing personalized care and support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards of professional excellence in all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
