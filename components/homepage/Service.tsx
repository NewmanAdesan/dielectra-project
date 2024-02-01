'use client'

import { ServiceProps } from '@/common.types'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';

const Service = ({src, alt, title, desc, index, changePosition, last}: ServiceProps) => {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <div className='grid gap-4 xs-2:grid-cols-2 md:gap-8 my-10 justify-items-start xs:justify-items-center xs-2:justify-items-start'>
      
          <div className={`${downloaded ? '' : 'image-loading'} w-full h-64 overflow-hidden max-w-[390px] xs-2:max-w-2xl rounded-xl relative md:h-96 lg:h-[420px] ${changePosition ? 'xs-2:col-start-2' : ''}`}>    
              <Image src={src}
                      alt={alt}
                      fill
                      style={{
                            objectFit: 'cover',
                            overflow: 'hidden',
                            objectPosition: 'center',
                            opacity: downloaded ? '1' : '0',
                            transition: 'opacity 1s ease'
                    }}
                    onLoad={(e) => {
                            setDownloaded(true);
                    }}
                    sizes='(min-width: 440px) 50vw, 100vw'
                />
          </div>

          <div className={`w-full max-w-[335px] md:max-w-none relative ${changePosition ? 'xs-2:row-start-1' : ''}`}>
            <Fade cascade direction='up' triggerOnce>
              <p className={`hidden md:block text-black opacity-25 text-8xl font-bold w-max ${changePosition ? 'mr-auto' : 'ml-auto'}`}>{index}</p>
              <p className='font-semibold text-xl mb-1 md:text-2xl'>{title}</p>
              <p className='font-normal text-base md:text-xl'>
                {desc}
              </p>
            </Fade>
            { last && <Link href='/business' className='hidden lg:block w-max rounded-lg border-2 border-blue-1 py-2 px-8 absolute bottom-0 right-0 text-blue-1'>View all</Link>
            }
          </div>
      

    </div>
  )
}

export default Service