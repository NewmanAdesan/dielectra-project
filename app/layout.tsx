import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import PageLoader from '@/components/general/PageLoader'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { PagesContextProvider } from '@/context/PagesContextProvider'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Dielectra',
  description: 'Connect to Power Anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const showPageLoader = false;

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <PagesContextProvider>
          <PageLoader />
          <Header />
          {children}
          <Footer />
        </PagesContextProvider>
      </body>
    </html>
  )
}
