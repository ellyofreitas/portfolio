import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { portfolioConfig } from '@/config/portfolio.config'
import { cn } from '@/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})
const rubik = Rubik({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    creator: portfolioConfig.socialLinks.x,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            'flex relative break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)]',
            { 'bg-white': '#E6E7EB' }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
