import { Banner2 } from '@/common.types'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import CustomImgElement from './CustomImgElement'

const Banner2 = ({src, alt, bannerText, special}: Banner2) => {
  return (
    <header className='w-full relative mt-[72px] lg:mt-[96px]'>
        <CustomImgElement 
            src={src}
            alt={alt}
            sizeClasses='w-full h-72 lg:h-[450px]'
            // priority={true}
            special={special}
        />
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold md:text-5xl'>
          <Fade cascade duration={300}>
            {bannerText}
          </Fade>
          </h1>
    </header>
  )
}

export default Banner2;