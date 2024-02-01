// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' shallow aria-label='Go to Dielectra Home Page' className='flex gap-1 items-center'>
      <img
        src='/dielectra-logo.png'
        width={40}
        height={40}
        alt='Di-Electra Logo'
        className='md:w-16 md:h-16'
      />
      <span className='font-settings-16 text-white md:text-[24px]'>Di-Tech</span>
    </Link>
  )
}

export default Logo