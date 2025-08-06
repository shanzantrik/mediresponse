'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { Menu, X, Sun, Moon, Phone, Mail, ChevronDown, Users, Plane, Globe, Wifi, GraduationCap, Heart, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
]

const services = [
  {
    name: 'Event Medical Solutions',
    href: '/event-medical',
    icon: Users,
    description: 'Comprehensive medical support for events, concerts, and large gatherings.'
  },
  {
    name: 'Aeromedical Evacuation Solutions',
    href: '/aeromedical-evacuation',
    icon: Plane,
    description: 'Emergency air medical transport with ICU-level care and expert teams.'
  },
  {
    name: 'Global Assistance Services',
    href: '/global-assistance',
    icon: Globe,
    description: 'Worldwide medical assistance and emergency response coordination.'
  },
  {
    name: 'Remote Medical Solutions',
    href: '/remote-medical',
    icon: Wifi,
    description: 'Telemedicine and remote medical support for isolated locations.'
  },
  {
    name: 'Medical & Safety Training',
    href: '/training',
    icon: GraduationCap,
    description: 'Professional medical and safety training programs for organizations.'
  },
  {
    name: 'Emergency Medical Services',
    href: '/emergency-services',
    icon: Heart,
    description: '24/7 emergency medical response and critical care services.'
  },
  {
    name: 'Assist Me – Panic Button Subscription',
    href: '/assist-me',
    icon: Shield,
    description: 'Personal emergency response system with instant panic button activation.'
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest('.mobile-menu')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
        : 'bg-white dark:bg-gray-900'
    )}>
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2">
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+27 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">info@mediresponse.co.za</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary-100 text-xs lg:text-sm">24/7 Emergency Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/Medi-Response-Long-Logo.png"
                alt="Medi Response"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                >
                  <span>Services</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                </button>

                {/* Mega Menu */}
                {servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 w-screen max-w-6xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-lg p-6 z-50"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <service.icon className="w-6 h-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-200" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
                                {service.name}
                              </h3>
                              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Emergency Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors duration-200"
                >
                  <div className="text-center">
                    <div className="text-xs">EMERGENCY</div>
                    <div className="text-sm">+27 87 3303 911</div>
                  </div>
                </Link>
                <Link
                  href="/aeromedical-evacuation"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors duration-200"
                >
                  <div className="text-center">
                    <div className="text-xs">EVACUATION</div>
                    <div className="text-sm">+27 10 1404 718</div>
                  </div>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Left Drawer */}
      <div className={cn(
        'fixed inset-0 z-50 lg:hidden',
        mobileMenuOpen ? 'block' : 'hidden'
      )}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/Medi-Response-Long-Logo.png"
                  alt="Medi Response"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors duration-200 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                    Services
                  </h3>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors duration-200 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <service.icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-3 rounded block text-center transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div className="text-xs">EMERGENCY</div>
                  <div className="text-sm">+27 87 3303 911</div>
                </div>
              </Link>
              <Link
                href="/aeromedical-evacuation"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-3 rounded block text-center transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div className="text-xs">EVACUATION</div>
                  <div className="text-sm">+27 10 1404 718</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
