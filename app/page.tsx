
'use client'

import Banner from '@/components/homepage/Banner'
import Contact from '@/components/homepage/Contact'
import Innovation from '@/components/homepage/Innovation'
import OurServices from '@/components/homepage/OurServices'
import Testimonials from '@/components/homepage/Testimonials'
import usePageLoaderSetter from '@/hooks/usePageLoaderSetter'

export default function Home() {

  usePageLoaderSetter(false);
  
  return (
    <>
      <Banner />
      <OurServices />
      <Innovation />
      <Testimonials />
      <Contact />
    </>
  )
}
