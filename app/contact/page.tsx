import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with our team for personalized medical assistance services,
            emergency support, or to learn more about our solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Our team is ready to assist you with your medical assistance needs.
                  Contact us through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Emergency Hotline */}
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Emergency Hotline
                      </h3>
                      <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                        Available 24/7 for immediate assistance
                      </p>
                      <a
                        href="tel:+27112345678"
                        className="text-2xl font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      >
                        +27 11 234 5678
                      </a>
                    </div>
                  </div>
                </div>

                {/* General Contact */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Email Support
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          General inquiries and support
                        </p>
                        <a
                          href="mailto:info@mediresponse.co.za"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          info@mediresponse.co.za
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Office Location
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Johannesburg, South Africa<br />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Main office and operations center
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Business Hours
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Emergency support available 24/7
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our medical assistance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What is the response time for emergencies?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our average response time is less than 15 minutes for emergency situations.
                  We maintain 24/7 availability for immediate assistance.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you provide services internationally?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we provide medical assistance services in over 150 countries worldwide.
                  Our global network ensures coverage wherever you are.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What types of medical assistance do you offer?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer global assistance services, aeromedical evacuation, remote medical solutions,
                  emergency response, and medical consultation services.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How do I get a quote for services?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Contact us through our website, phone, or email to receive a personalized quote
                  based on your specific needs and requirements.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Are your medical teams certified?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, all our medical professionals are fully certified and experienced in their
                  respective fields. We maintain high standards of medical care.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We accept various payment methods including credit cards, bank transfers,
                  and corporate billing arrangements for ongoing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
