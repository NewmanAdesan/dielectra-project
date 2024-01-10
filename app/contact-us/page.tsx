
'use client'

import Banner2 from '@/components/general/Banner2'
import ContactSection from '@/components/contact-page/ContactSection'
import usePageLoaderSetter from '@/hooks/usePageLoaderSetter';

const ContactPage = () => {

  usePageLoaderSetter(false);

  return (
    <>
        <Banner2 src='/contact-page/contactPageBanner.png' alt='' bannerText='Contact us' />
        <ContactSection />
    </>
  )
}

export default ContactPage