import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediResponse - Global Medical Assistance & Evacuation Services',
  description: 'Professional medical assistance, aeromedical evacuation, and remote medical solutions worldwide. 24/7 emergency response and healthcare support.',
  keywords: 'medical assistance, aeromedical evacuation, remote medical solutions, emergency response, healthcare, medical evacuation',
  authors: [{ name: 'MediResponse' }],
  openGraph: {
    title: 'MediResponse - Global Medical Assistance & Evacuation Services',
    description: 'Professional medical assistance, aeromedical evacuation, and remote medical solutions worldwide.',
    url: 'https://mediresponse.co.za',
    siteName: 'MediResponse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MediResponse - Global Medical Assistance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediResponse - Global Medical Assistance & Evacuation Services',
    description: 'Professional medical assistance, aeromedical evacuation, and remote medical solutions worldwide.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
            <Header />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
