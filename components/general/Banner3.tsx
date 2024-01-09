import { Banner2 } from '@/common.types'
import React from 'react'
import CustomImgElement from './CustomImgElement'

const Banner3 = ({src, alt, bannerText}: Banner2) => {
    return (
      <header className='w-full relative'>
          <CustomImgElement
              src={src}
              alt={alt}
              sizeClasses='w-full h-72 md:h-[350px]'
          />
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold md:text-5xl'>{bannerText}</h1>
      </header>
    )
  }

export default Banner3