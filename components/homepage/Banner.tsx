'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  const [activeImage, setActiveImage] = useState(-1);
  const [howManyImagesHasLoaded, setHowManyImagesHasLoaded] = useState(-1);
  const [intervalID, setIntervalID] = useState<number | null>(null);

  useEffect(() => {
    console.log('useEffect has started');
    setHowManyImagesHasLoaded(0);
    return () => {
      console.log('useEffect removed')
      setHowManyImagesHasLoaded(-1);
    }
  }, [])

  function startInterval() {

    console.log('the startInterval is called')

     if (intervalID) {
      console.log('previous interval was cleared')
      clearInterval(intervalID)
    };
     setIntervalID(
        Number(
          setInterval(()=>{
            console.log('new interval has started');
            setActiveImage(prev => (prev + 1) % 5);
          }, 5000)
        )
     )
  }
  
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
                        opacity: activeImage === 0 ? '1' : '0',
                        transition: 'opacity 1s ease'
                   }}
                   onLoad={() => {
                      console.log('first banner image has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                      setActiveImage(0);
                   }}
            />}
            {howManyImagesHasLoaded >= 1 && <Image src='/homepage/banner-image-2.png'
                   alt='Banner Image 2'
                   fill
                   style={{
                        objectFit: 'cover',
                        overflow: 'hidden',
                        objectPosition: 'center',
                        opacity: activeImage === 1 ? '1' : '0',
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
                        opacity: activeImage === 2 ? '1' : '0',
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
                        opacity: activeImage === 3 ? '1' : '0',
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
                        opacity: activeImage === 4 ? '1' : '0',
                        transition: 'opacity 1s ease',
                   }}
                   onLoad={() => {
                      console.log('banner image 5 has loaded');
                      setHowManyImagesHasLoaded( prev => prev + 1);
                      startInterval();
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
              <button className={`${activeImage === 0 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  setActiveImage(0);
                  startInterval();
                }}></button>
              <button className={`${activeImage === 1 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  setActiveImage(1);
                  startInterval();
                }}></button>
              <button className={`${activeImage === 2 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  setActiveImage(2);
                  startInterval();
                }}></button>
              <button className={`${activeImage === 3 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  setActiveImage(3);
                  startInterval();
                }}></button>
              <button className={`${activeImage === 4 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  setActiveImage(4);
                  startInterval();
                }}></button>
          </div>
        </div>

        {/* Banner Arrows */}
    </section>
  )
}

export default Banner