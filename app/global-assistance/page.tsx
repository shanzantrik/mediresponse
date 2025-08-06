import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Phone, Mail, Clock, Shield, Users, Award } from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceFeatures from '@/components/ServiceFeatures'
import ServiceProcess from '@/components/ServiceProcess'
import CTASection from '@/components/CTASection'

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic'

export default function GlobalAssistancePage() {
  const heroData = {
    title: 'Global Assistance Services',
    subtitle: 'Comprehensive medical assistance and support services worldwide',
    description: 'Professional medical assistance and coordination services for travelers, expatriates, and organizations operating globally. Our 24/7 support ensures peace of mind wherever you are.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { number: '150+', label: 'Countries Covered' },
      { number: '24/7', label: 'Emergency Support' },
      { number: '15min', label: 'Response Time' }
    ]
  }

  const features = [
    {
      icon: "Phone",
      title: '24/7 Medical Consultation',
      description: 'Round-the-clock access to qualified medical professionals for advice and guidance.',
      color: 'primary'
    },
    {
      icon: "Shield",
      title: 'Emergency Medical Coordination',
      description: 'Rapid coordination of emergency medical services and hospital admissions.',
      color: 'accent'
    },
    {
      icon: "Users",
      title: 'Medical Escort Services',
      description: 'Professional medical escorts for safe travel during medical emergencies.',
      color: 'secondary'
    },
    {
      icon: "Award",
      title: 'Repatriation Assistance',
      description: 'Comprehensive support for returning patients to their home country.',
      color: 'primary'
    },
    {
      icon: "Globe",
      title: 'Global Network',
      description: 'Access to our worldwide network of medical providers and facilities.',
      color: 'accent'
    },
    {
      icon: "Clock",
      title: 'Rapid Response',
      description: 'Average response time of less than 15 minutes for all emergencies.',
      color: 'secondary'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Contact & Assessment',
      description: 'Initial contact and medical situation assessment by our expert team.',
      icon: Phone
    },
    {
      step: '02',
      title: 'Service Coordination',
      description: 'Coordination of appropriate medical services and facility arrangements.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execution of medical assistance plan with continuous monitoring.',
      icon: Users
    },
    {
      step: '04',
      title: 'Follow-up & Support',
      description: 'Ongoing support and follow-up care coordination as needed.',
      icon: Award
    }
  ]

  return (
    <div className="pt-24 w-full">
      <ServiceHero {...heroData} />
      <ServiceFeatures
        title="Our Global Assistance Services"
        subtitle="Comprehensive medical support wherever you are"
        features={features}
      />
      <ServiceProcess
        title="How Our Global Assistance Works"
        subtitle="Simple, efficient, and reliable medical support process"
        process={process}
      />
      <CTASection />
    </div>
  )
}
