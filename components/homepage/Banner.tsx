'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  const [ImageOpacity, setImageOpacity] = useState(0);
  const [dummyState, setDummyState] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [howManyImagesHasLoaded, setHowManyImagesHasLoaded] = useState(-1);

  useEffect(() => {
    console.log('useEffect has started');
    setHowManyImagesHasLoaded(0);
    return () => {
      console.log('useEffect removed')
      setHowManyImagesHasLoaded(-1);
    }
  }, [])
  
  return (
    <section className='w-full h-[681px] relative'>
        {/* Banner Images */}
        <div className={`w-full h-full relative bg-color-3 ${howManyImagesHasLoaded === 0 ? styles['image-loading'] : ''}`}>
            {howManyImagesHasLoaded >= 0 && <Image src='/homepage/banner-image-1.jpg'
                   alt='Banner Image 1'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 1 ? '1' : '0',
                        transition: 'opacity 1s ease'
                   }}
                   onLoad={() => {
                      console.log('first banner image has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                      setActiveImage(1);
                   }}
            />}
            {howManyImagesHasLoaded >= 1 && <Image src='/homepage/banner-image-2.png'
                   alt='Banner Image 2'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 2 ? '1' : '0',
                        transition: 'opacity 1s ease',
                   }}
                   onLoad={() => {
                      console.log('second banner image has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                   }}
            />}
            {howManyImagesHasLoaded >= 2 && <Image src='/homepage/banner-image-3.png'
                   alt='Banner Image 3'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 3 ? '1' : '0',
                        transition: 'opacity 1s ease',
                   }}
                   onLoad={() => {
                      console.log('thrid banner image has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                   }}
            />}
            {howManyImagesHasLoaded >= 3 && <Image src='/homepage/banner-image-4.png'
                   alt='Banner Image 4'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 4 ? '1' : '0',
                        transition: 'opacity 1s ease',
                   }}
                   onLoad={() => {
                      console.log('banner image 4 has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                   }}
            />}
            {howManyImagesHasLoaded >= 4 && <Image src='/homepage/banner-image-5.png'
                   alt='Banner Image 5'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 5 ? '1' : '0',
                        transition: 'opacity 1s ease',
                   }}
                   onLoad={() => {
                      console.log('banner image 5 has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                   }}
            />}
        </div>

        {/* Banner Text */}
        <div className='absolute top-[150px] left-5 w-homepage-banner-text mx-auto p-5 backdrop-blur-xsm text-center text-white'>
            <h1 className='text-[32px] font-bold leading-[140%] mb-3'>Connect to Power <span className='text-color-1'>Anywhere</span></h1>
            <p className='text-[16px] font-normal leading-[140%] '>Providing affordable energy solutions to people no matter their location around Africa</p>
        </div>

        {/* Banner Pagination */}
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 '>
          <div className='flex gap-1 justify-center w-20 rounded-lg bg-black p-1'>
              <button className={`${activeImage === 1 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => setActiveImage(1)}></button>
              <button className={`${activeImage === 2 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => setActiveImage(2)}></button>
              <button className={`${activeImage === 3 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => setActiveImage(3)}></button>
              <button className={`${activeImage === 4 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => setActiveImage(4)}></button>
              <button className={`${activeImage === 5 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => setActiveImage(5)}></button>
          </div>
        </div>

    </section>
  )
}

export default Banner