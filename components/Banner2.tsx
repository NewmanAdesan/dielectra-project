import { Banner2 } from '@/common.types'
import Image from 'next/image'
import React from 'react'

const Banner2 = ({src, alt, bannerText}: Banner2) => {
  return (
    <section className='w-full relative'>
        <Image 
            src={src}
            alt={alt}
            fill
        />
        <h1>{bannerText}</h1>
    </section>
  )
}

export default Banner2