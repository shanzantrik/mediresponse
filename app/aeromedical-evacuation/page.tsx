import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plane, Shield, Users, Award, Clock, Globe } from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import ServiceProcess from '@/components/ServiceProcess'
import CTASection from '@/components/CTASection'

export default function AeromedicalEvacuationPage() {
  const heroData = {
    title: 'Aeromedical Evacuation',
    subtitle: 'Specialized air medical transport services for critical patients',
    description: 'Professional aeromedical evacuation services for patients requiring immediate air transport to appropriate medical facilities. Our specialized aircraft and medical teams ensure safe, rapid transport worldwide.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { number: '5000+', label: 'Successful Evacuations' },
      { number: '24/7', label: 'Air Ambulance' },
      { number: '2hr', label: 'Average Response' }
    ]
  }

  const features = [
    {
      icon: "Plane",
      title: 'Air Ambulance Services',
      description: 'Specialized aircraft equipped with intensive care units for critical patient transport.',
      color: 'primary'
    },
    {
      icon: "Shield",
      title: 'Critical Care Transport',
      description: 'Advanced life support and monitoring during air medical transport.',
      color: 'accent'
    },
    {
      icon: "Users",
      title: 'Medical Escort Teams',
      description: 'Experienced medical professionals accompanying patients during transport.',
      color: 'secondary'
    },
    {
      icon: "Award",
      title: 'International Flights',
      description: 'Cross-border and international medical evacuation services.',
      color: 'primary'
    },
    {
      icon: "Globe",
      title: 'Ground Coordination',
      description: 'Seamless coordination between air and ground medical services.',
      color: 'accent'
    },
    {
      icon: "Clock",
      title: 'Rapid Deployment',
      description: 'Quick deployment of air medical teams within 2-4 hours.',
      color: 'secondary'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Emergency Assessment',
      description: 'Rapid assessment of patient condition and transport requirements.',
      icon: Shield
    },
    {
      step: '02',
      title: 'Aircraft & Team Deployment',
      description: 'Deployment of appropriate aircraft and medical team to location.',
      icon: Plane
    },
    {
      step: '03',
      title: 'Patient Transfer',
      description: 'Safe transfer and stabilization of patient for air transport.',
      icon: Users
    },
    {
      step: '04',
      title: 'Medical Transport',
      description: 'Continuous monitoring and care during flight to destination.',
      icon: Award
    }
  ]

  return (
    <div className="pt-24 w-full">
      <ServiceHero {...heroData} />
      <ServiceFeatures
        title="Our Aeromedical Evacuation Services"
        subtitle="Professional air medical transport with advanced life support"
        features={features}
      />
      <ServiceProcess
        title="How Aeromedical Evacuation Works"
        subtitle="Rapid, safe, and professional air medical transport process"
        process={process}
      />
      <CTASection />
    </div>
  )
}
