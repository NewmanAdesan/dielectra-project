import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-color-4 py-5'>
        <div className='p-5 grid grid-cols-autoFit gap-x-5 gap-y-7 items-start'>
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
                <h3 className='text-xl font-semibold'>About</h3>
                <ul className='font-normal text-sm flex flex-col gap-2'>
                    <li>Who we are</li>
                    <li>Our philosophy</li>
                    <li>Our vision</li>
                    <li>Core values</li>
                    <li>FAQs</li>
                </ul>
            </div>
            {/* Business */}
            <div className='px-[10px] w-full text-white leading-[140%]'>
                <h3 className='text-xl font-semibold'>Businesses</h3>
                <ul className='font-normal text-sm flex flex-col gap-2'>
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
                <h3 className='text-xl font-semibold'>Contact Us</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='flex gap-1 items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 7.5L12 12.75L18.75 7.5" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='font-normal text-sm '>Info@dielectratechnologies.com</span>
                    </li>
                    <li className='flex gap-1 items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.506 7.96C18.7928 10.7426 17.3448 13.2824 15.3136 15.3136C13.2824 17.3448 10.7426 18.7928 7.96 19.506C5.819 20.051 4 18.21 4 16V15C4 14.448 4.449 14.005 4.998 13.95C5.90852 13.8603 6.80229 13.6452 7.654 13.311L9.174 14.831C11.6489 13.6447 13.6447 11.6489 14.831 9.174L13.311 7.654C13.6456 6.80234 13.8609 5.90857 13.951 4.998C14.005 4.448 14.448 4 15 4H16C18.21 4 20.051 5.819 19.506 7.96Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='font-normal text-sm'>+234 703 2784 024</span>
                    </li>
                    <li className='flex gap-1 items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z" fill="#F7F7F7"/>
                            <path d="M12 1.5C7.86469 1.5 4.5 4.71797 4.5 8.67188C4.5 10.5548 5.35828 13.0589 7.05094 16.1147C8.41031 18.5681 9.98297 20.7867 10.8009 21.8906C10.9392 22.0792 11.1199 22.2326 11.3284 22.3384C11.537 22.4441 11.7676 22.4992 12.0014 22.4992C12.2352 22.4992 12.4658 22.4441 12.6744 22.3384C12.8829 22.2326 13.0637 22.0792 13.2019 21.8906C14.0184 20.7867 15.5925 18.5681 16.9519 16.1147C18.6417 13.0598 19.5 10.5558 19.5 8.67188C19.5 4.71797 16.1353 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z" fill="#F7F7F7"/>
                        </svg>
                        <span className='font-normal text-sm '>Block 1, Road c, Off Obafemi Awolowo way, Igbogbo-ikorodu, lagos</span>
                    </li>
                </ul>
            </div>
        </div>

        <hr className='bg-white text-white mt-6 mb-3'/>

        <p className='text-center font-normal text-[10px] text-white flex gap-1 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_217_171)">
                    <path d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17V9.691C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416V6.504H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z" fill="#FEFEFE"/>
                </g>
                <defs>
                    <clipPath id="clip0_217_171">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <span>Di-electra 2023</span>
        </p>
    </footer>
  )
}

export default Footer;