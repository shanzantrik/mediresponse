import Link from 'next/link'
import { Map, Home, Users, Plane, Wifi, FileText, Phone, Award } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function SitemapPage() {
  const sitemapData = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and story' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'Services',
      icon: Award,
      links: [
        { name: 'Global Assistance', href: '/global-assistance', description: 'Comprehensive medical assistance services' },
        { name: 'Aeromedical Evacuation', href: '/aeromedical-evacuation', description: 'Emergency medical evacuation services' },
        { name: 'Remote Medical Solutions', href: '/remote-medical', description: 'Remote medical consultation and support' }
      ]
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'Careers', href: '/careers', description: 'Job opportunities and company culture' },
        { name: 'Sitemap', href: '/sitemap', description: 'Complete site structure' }
      ]
    }
  ]

  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-primary-100">
              Complete overview of all pages and sections on our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-2 border-primary-200 pl-4">
                      <Link
                        href={link.href}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {link.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Most popular pages and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/global-assistance"
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
            >
              <Plane className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Global Assistance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive medical support worldwide
              </p>
            </Link>

            <Link
              href="/aeromedical-evacuation"
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
            >
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Aeromedical Evacuation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Emergency medical evacuation services
              </p>
            </Link>

            <Link
              href="/remote-medical"
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
            >
              <Wifi className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Remote Medical
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Remote medical consultation and support
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Contact Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get in touch for assistance
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Site Information */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About This Site
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                MediResponse is a leading provider of global medical assistance and evacuation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  150+ Countries
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Global coverage for medical assistance
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Certified Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Internationally recognized medical assistance
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Round-the-clock emergency response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
