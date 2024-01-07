import { Banner2 } from '@/common.types'
import React from 'react'
import CustomImage from './CustomImage'

const Banner2 = ({src, alt, bannerText}: Banner2) => {
  return (
    <header className='w-full relative'>
        <CustomImage 
            src={src}
            alt={alt}
            sizeClasses='w-full h-56 md:h-[300px]'
        />
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold md:text-5xl'>{bannerText}</h1>

    </header>
  )
}

export default Banner2;