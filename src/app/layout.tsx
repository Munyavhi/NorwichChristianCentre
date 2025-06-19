import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Norwich Christian Centre | Multi-Cultural Worship Center in Norwich',
  description: 'Join Norwich Christian Centre, a vibrant multi-racial, multi-ethnic Revival Worship Center in Norwich. Experience powerful Bible teaching, Discipleship, Worship, and Soul winning in a loving community.',
  keywords: 'Norwich Christian Centre, Christian Church Norwich, Multi-cultural Church, Bible Teaching, Worship Center, Church Norwich, Christian Community, NR1 2EX, Long John Hill',
  authors: [{ name: 'Norwich Christian Centre' }],
  creator: 'Norwich Christian Centre',
  publisher: 'Norwich Christian Centre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://norwichchristiancentre.org.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Norwich Christian Centre | Multi-Cultural Worship Center in Norwich',
    description: 'Join Norwich Christian Centre, a vibrant multi-racial, multi-ethnic Revival Worship Center in Norwich. Experience powerful Bible teaching, Discipleship, Worship, and Soul winning in a loving community.',
    url: 'https://norwichchristiancentre.org.uk',
    siteName: 'Norwich Christian Centre',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/CCC2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Norwich Christian Centre',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norwich Christian Centre | Multi-Cultural Worship Center in Norwich',
    description: 'Join Norwich Christian Centre, a vibrant multi-racial, multi-ethnic Revival Worship Center in Norwich. Experience powerful Bible teaching, Discipleship, Worship, and Soul winning in a loving community.',
    images: ['/images/CCC2.jpeg'],
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
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Navigation />
        <AnimatedBackground />
        <main className="min-h-screen bg-white/80 backdrop-blur-sm pt-16 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
} 