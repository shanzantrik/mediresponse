import { FileText, Shield, Users, Award } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function TermsPage() {
  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  By accessing and using MediResponse services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Description of Service
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  MediResponse provides medical assistance, aeromedical evacuation, and remote medical solutions worldwide. Our services include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>24/7 emergency medical coordination</li>
                  <li>Aeromedical evacuation services</li>
                  <li>Remote medical consultation</li>
                  <li>Global medical assistance</li>
                  <li>Medical escort services</li>
                  <li>Repatriation assistance</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  User Responsibilities
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with the operation of our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees associated with services rendered</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Medical Disclaimer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  MediResponse provides coordination and assistance services but does not provide direct medical care. Our services include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Coordination with medical providers</li>
                  <li>Emergency response coordination</li>
                  <li>Medical facility arrangements</li>
                  <li>Travel and logistics support</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  We do not guarantee specific medical outcomes and are not liable for medical decisions made by healthcare providers.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Payment Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Payment terms and conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>All fees are due upon service completion</li>
                  <li>Emergency services may require immediate payment</li>
                  <li>We accept major credit cards and bank transfers</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  MediResponse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party, whether in an action in contract or tort, even if the other party has been advised of the possibility of such damages.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Indemnification
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  You agree to indemnify and hold harmless MediResponse, its officers, directors, employees, and agents from and against any claims, actions, demands, losses, damages, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to your use of our services or violation of these terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Termination
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Governing Law
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  These Terms shall be interpreted and governed by the laws of South Africa, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> legal@mediresponse.co.za<br />
                    <strong>Phone:</strong> +27 11 234 5678<br />
                    <strong>Address:</strong> Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 border-t pt-6">
                <p>Last Updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
