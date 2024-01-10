'use client'


import OurCoreValues from '@/components/about-page/OurCoreValues';
import OurGoals from '@/components/about-page/OurGoals';
import OurPhilosophy from '@/components/about-page/OurPhilosophy';
import WhoWeAre from '@/components/about-page/WhoWeAre';
import Banner2 from '@/components/general/Banner2';
import React from 'react'
import usePageLoaderSetter from '@/hooks/usePageLoaderSetter';

const AboutPage = () => {
  
  usePageLoaderSetter(false);

  return (
    <div className='paragraph-font-setting-1'>
        <Banner2 src='/about-page/aboutUsPageBanner.png' alt='' bannerText='About Us' />
        <WhoWeAre />
        <OurPhilosophy />
        <OurCoreValues />
        <OurGoals />
    </div>
  )
}

export default AboutPage;