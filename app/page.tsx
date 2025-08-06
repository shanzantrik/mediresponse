import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Plane, Wifi, Clock, Users, Globe, Award, Stethoscope, UserCheck, Settings, Phone, Building2, Heart } from 'lucide-react'
import CardCarousel from '@/components/CardCarousel'
import ServicesOverview from '@/components/ServicesOverview'
import ServiceFeatures from '@/components/ServiceFeatures'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  const whyChooseFeatures = [
    {
      icon: "Stethoscope",
      title: "Clinically Governed Operations",
      description: "A strong framework of medical oversight, protocols, and continuous quality assurance supports all services.",
      color: "primary"
    },
    {
      icon: "UserCheck",
      title: "Experienced Medical Personnel",
      description: "Our teams include qualified paramedics, nurses, and physicians with experience in high-pressure and remote environments.",
      color: "secondary"
    },
    {
      icon: "Settings",
      title: "Scalable Medical Infrastructure",
      description: "From mobile clinics to aeromedical evacuations, we deploy the right level of support to match your risk profile and location.",
      color: "accent"
    },
    {
      icon: "Phone",
      title: "24/7 Coordination and Support",
      description: "Our Global Coordination Centre ensures continuous case management, telemedicine, and response capability at all hours.",
      color: "primary"
    },
    {
      icon: "Building2",
      title: "Sector-Specific Expertise",
      description: "We serve industries with complex safety needs, including mining, energy, construction, maritime, and event environments.",
      color: "secondary"
    },
    {
      icon: "Heart",
      title: "Patient-Centered Care",
      description: "We prioritize patient safety and comfort with personalized care plans and compassionate medical professionals.",
      color: "primary"
    }
  ]

  return (
    <div className="w-full">
      <CardCarousel />
      <ServicesOverview />
      <ServiceFeatures
        title="Why Choose Medi Response?"
        subtitle="Our commitment to excellence, expertise, and innovation sets us apart in the medical assistance industry."
        features={whyChooseFeatures}
      />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
