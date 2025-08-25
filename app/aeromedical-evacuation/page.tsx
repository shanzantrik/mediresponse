import Link from 'next/link'
import { ArrowRight, Plane, Shield, Users, Award, Clock, Globe } from 'lucide-react'

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic'

export default function AeromedicalEvacuationPage() {
  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(236, 31, 38, 0.8) 0%, rgba(41, 71, 157, 0.8) 100%), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="text-primary-200 font-medium">
                  Specialized air medical transport services for critical patients
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Aeromedical Evacuation
                </h1>

                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional aeromedical evacuation services for patients requiring immediate air transport to appropriate medical facilities. Our specialized aircraft and medical teams ensure safe, rapid transport worldwide.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-300">5000+</div>
                  <div className="text-sm text-gray-300">Successful Evacuations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-300">24/7</div>
                  <div className="text-sm text-gray-300">Air Ambulance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-300">2hr</div>
                  <div className="text-sm text-gray-300">Average Response</div>
                </div>
              </div>

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

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <Plane className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Emergency Hotline</h3>
                    <p className="text-gray-200">Available 24/7 for immediate assistance</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <Shield className="w-5 h-5 text-primary-300" />
                        <span className="text-xl font-bold text-white">+27 11 234 5678</span>
                      </div>

                      <div className="flex items-center justify-center space-x-3">
                        <Clock className="w-5 h-5 text-primary-300" />
                        <span className="text-white">Response Time: &lt; 15 minutes</span>
                      </div>
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

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Aeromedical Evacuation Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional air medical transport with advanced life support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Plane className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      Air Ambulance Services
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Specialized aircraft equipped with intensive care units for critical patient transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      Critical Care Transport
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Advanced life support and monitoring during air medical transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      Medical Escort Teams
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Experienced medical professionals accompanying patients during transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      International Flights
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Cross-border and international medical evacuation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Globe className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      Ground Coordination
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Seamless coordination between air and ground medical services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Clock className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      Rapid Deployment
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Quick deployment of air medical teams within 2-4 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary-100">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Ready to Get Started?</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Get Your Free Quote Today
                </h2>

                <p className="text-xl text-primary-100 leading-relaxed">
                  Contact us for a personalized quote and discover how our aeromedical evacuation services can provide peace of mind for your organization.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-accent group flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary group flex items-center justify-center space-x-2"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Emergency Contact</h3>
                    <p className="text-primary-100">Available 24/7 for immediate assistance</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                        <Plane className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-primary-100 text-sm">Emergency Hotline</p>
                        <p className="text-xl font-bold">+27 11 234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-primary-100 text-sm">Response Time</p>
                        <p className="text-lg font-semibold">&lt; 15 minutes</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent-500/20 rounded-lg p-4">
                    <p className="text-sm text-primary-100 text-center">
                      <strong>Emergency?</strong> Call our hotline immediately for rapid response medical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
