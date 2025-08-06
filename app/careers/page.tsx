import { Users, Award, Globe, Heart, Zap, Shield } from 'lucide-react'
import ServiceFeatures from '@/components/ServiceFeatures'
import CTASection from '@/components/CTASection'

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Medical Coordinator',
      department: 'Operations',
      location: 'Johannesburg, South Africa',
      type: 'Full-time',
      description: 'Coordinate medical assistance and evacuation services for clients worldwide.',
      requirements: [
        'Medical background or healthcare experience',
        'Excellent communication skills',
        'Ability to work under pressure',
        'Fluent in English, additional languages a plus'
      ]
    },
    {
      title: 'Emergency Response Specialist',
      department: 'Emergency Services',
      location: 'Remote',
      type: 'Full-time',
      description: 'Provide 24/7 emergency medical coordination and response services.',
      requirements: [
        'Emergency medical services experience',
        'Critical thinking and problem-solving skills',
        'Experience in international medical coordination',
        'Available for shift work including nights and weekends'
      ]
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Johannesburg, South Africa',
      type: 'Full-time',
      description: 'Develop and maintain relationships with corporate clients and partners.',
      requirements: [
        'Sales experience in healthcare or travel industry',
        'Strong networking and relationship-building skills',
        'Understanding of international markets',
        'Bachelor\'s degree in business or related field'
      ]
    }
  ]

  const benefits = [
    {
      icon: "Heart",
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: 'primary'
    },
    {
      icon: "Award",
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities',
      color: 'secondary'
    },
    {
      icon: "Globe",
      title: 'Global Exposure',
      description: 'Work with international clients and partners worldwide',
      color: 'accent'
    },
    {
      icon: "Zap",
      title: 'Flexible Work',
      description: 'Remote work options and flexible scheduling',
      color: 'primary'
    },
    {
      icon: "Shield",
      title: 'Job Security',
      description: 'Stable company with growing market presence',
      color: 'secondary'
    },
    {
      icon: "Users",
      title: 'Great Team',
      description: 'Collaborative environment with experienced professionals',
      color: 'accent'
    }
  ]

  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-100">
              Help us provide life-saving medical assistance to people around the world. Be part of a team that makes a real difference.
            </p>
          </div>
        </div>
      </section>

      <ServiceFeatures
        title="Our Culture"
        subtitle="We're passionate about helping people in their time of need. Our team is driven by purpose, committed to excellence, and dedicated to making a positive impact."
        features={benefits}
      />

      {/* Job Openings */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore opportunities to join our growing team and make a difference in global healthcare.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 lg:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our simple and transparent hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Apply
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Submit your application and resume through our online portal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Review
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team reviews your application and experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Interview
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Meet with our team to discuss the role and your fit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Join
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome to the MediResponse team!
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
