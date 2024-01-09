import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-color-4 py-5'>
        <div className='p-5 grid grid-cols-autoFit gap-x-5 gap-y-7 items-start max-w-7xl mx-auto'>
            {/* Logo */}
            <Link href='/' shallow aria-label='Go to Dielectra Home Page' className='p-[10px] flex gap-1 items-center'>
                <Image
                    src='/dielectra-logo.png'
                    width={60}
                    height={60}
                    alt='Di-Electra Logo'
                />
                <span className='text-white text-[24px] text-center font-bold'>Di-Tech</span>
            </Link>
            {/* About us */}
            <div className='px-[10px] w-full text-white leading-[140%]'>
                <h3 className='text-xl md:text-2xl font-semibold'>About</h3>
                <ul className='font-normal text-sm md:text-base flex flex-col gap-2'>
                    <li>Who we are</li>
                    <li>Our philosophy</li>
                    <li>Our vision</li>
                    <li>Core values</li>
                    <li>FAQs</li>
                </ul>
            </div>
            {/* Business */}
            <div className='px-[10px] w-full text-white leading-[140%]'>
                <h3 className='text-xl md:text-2xl font-semibold'>Businesses</h3>
                <ul className='font-normal text-sm md:text-base flex flex-col gap-2'>
                    <li>Engineering and Construction</li>
                    <li>Consulting</li>
                    <li>Operations and Maintenance</li>
                    <li>E-commerce</li>
                    <li>Training and Certification</li>
                    <li>Research and Development</li>
                </ul>
            </div>
            {/* Contact Us */}
            <div className='px-[10px] w-full text-white leading-[140%]'>
                <h3 className='text-xl md:text-2xl font-semibold'>Contact Us</h3>
                <ul className='flex flex-col gap-2 font-normal text-sm md:text-base'>
                    <li className='flex gap-1 items-start'>
                        <img src="/mail-icon-white.svg" alt="  mail  " aria-hidden='true'/>
                        <span>Info@dielectratechnologies.com</span>
                    </li>
                    <li className='flex gap-1 items-start'>
                        <img src="/phone-icon-white.svg" alt=" phone  " aria-hidden='true'/>
                        <span>+234 703 2784 024</span>
                    </li>
                    <li className='flex gap-1 items-start'>
                        <img src="/location-icon-white.svg" alt="  location  " aria-hidden='true'/>
                        <span>Block 1, Road c, Off Obafemi Awolowo way, Igbogbo-ikorodu, lagos</span>
                    </li>
                </ul>
            </div>
        </div>

        <hr className='bg-white text-white mt-6 mb-3'/>

        <p className='text-center font-normal text-[10px] text-white flex gap-1 justify-center'>
            <img src="/bi_c-circle.svg" alt="  copyright  " aria-hidden='true'/>
            <span>Di-electra 2023</span>
        </p>
    </footer>
  )
}

export default Footer;