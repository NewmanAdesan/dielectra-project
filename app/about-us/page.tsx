import OurCoreValues from '@/components/about-page/OurCoreValues';
import OurPhilosophy from '@/components/about-page/OurPhilosophy';
import WhoWeAre from '@/components/about-page/WhoWeAre';
import Banner2 from '@/components/general/Banner2';
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <Banner2 src='/about-page/aboutUsPageBanner.png' alt='' bannerText='About Us' />
        <WhoWeAre />
        <OurPhilosophy />
        <OurCoreValues />
    </>
  )
}

export default AboutPage;