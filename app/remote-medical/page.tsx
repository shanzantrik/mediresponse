import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Wifi, Shield, Users, Award, Clock, Globe } from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import ServiceProcess from '@/components/ServiceProcess'
import CTASection from '@/components/CTASection'

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic'

export default function RemoteMedicalPage() {
  const heroData = {
    title: 'Remote Medical Solutions',
    subtitle: 'Advanced telemedicine and remote healthcare support',
    description: 'Cutting-edge telemedicine and remote medical support services for locations with limited access to healthcare facilities. Our digital health platforms provide expert medical care anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { number: '1000+', label: 'Remote Consultations' },
      { number: '24/7', label: 'Digital Support' },
      { number: '5min', label: 'Response Time' }
    ]
  }

  const features = [
    {
      icon: "Wifi",
      title: 'Telemedicine Consultations',
      description: 'Real-time video consultations with qualified medical professionals worldwide.',
      color: 'primary'
    },
    {
      icon: "Shield",
      title: 'Remote Health Monitoring',
      description: 'Continuous monitoring of vital signs and health parameters remotely.',
      color: 'accent'
    },
    {
      icon: "Users",
      title: 'Digital Health Platforms',
      description: 'User-friendly digital platforms for seamless healthcare access.',
      color: 'secondary'
    },
    {
      icon: "Award",
      title: 'Medical Device Integration',
      description: 'Integration with medical devices for comprehensive remote care.',
      color: 'primary'
    },
    {
      icon: "Globe",
      title: 'Global Connectivity',
      description: 'Reliable connectivity for remote locations worldwide.',
      color: 'accent'
    },
    {
      icon: "Clock",
      title: 'Instant Access',
      description: 'Immediate access to medical professionals within minutes.',
      color: 'secondary'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Platform Access',
      description: 'Secure access to our telemedicine platform from any location.',
      icon: Wifi
    },
    {
      step: '02',
      title: 'Medical Assessment',
      description: 'Comprehensive remote medical assessment and consultation.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Treatment Plan',
      description: 'Development of personalized treatment and care plans.',
      icon: Users
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous remote monitoring and follow-up care.',
      icon: Award
    }
  ]

  return (
    <div className="pt-24 w-full">
      <ServiceHero {...heroData} />
      <ServiceFeatures
        title="Our Remote Medical Solutions"
        subtitle="Advanced telemedicine and digital health services"
        features={features}
      />
      <ServiceProcess
        title="How Remote Medical Solutions Work"
        subtitle="Seamless digital healthcare access and support process"
        process={process}
      />
      <CTASection />
    </div>
  )
}
