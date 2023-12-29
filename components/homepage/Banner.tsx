'use client'

import Image from 'next/image'
import React, { useEffect, useReducer, useState } from 'react'
import styles from './Banner.module.css'

const NUMBER_OF_BANNER_CAROUSEL_IMAGE = 5;

type BannerInitialState = {
  activeImage: number,
  howManyImagesHasLoaded: number,
  intervalID: number | null,
}

type DispatchAction = {
  type: 'images-loaded' | 'loaded-an-image' | 'clear-interval' | 'setup-interval' | 'set-active-image' | 'slide-to-next-active-image',
  payload?: number
}

const initialState : BannerInitialState = {

  // this state tracks which banner carousel image is active 
  // initially no banner carousel image is active 
  // BECAUSE According to the design, Banner Carousel Images start downloading only after the Banner Component has mounted.
  activeImage: -1,

  // this state controls when the banner carousel images starts downloading 
  // when it is -1, no banner carousel image will download BECAUSE we want the images to start downloading when the Banner Component has finished mouting
  // when it is 0, it signifies no image has downloaded thus the first image will begin downloading 
  howManyImagesHasLoaded: -1, 

  // this state keeps track of the interval that controls the carousel animation
  intervalID: null,
} 

function reducer(state: BannerInitialState, action: DispatchAction): BannerInitialState {
  switch(action.type) {
    case 'images-loaded':
      return {
        ...state,
        howManyImagesHasLoaded: Number(action.payload)
      }

    case 'loaded-an-image':
      return {
        ...state,
        howManyImagesHasLoaded: state.howManyImagesHasLoaded + 1,
      }
    
    case 'clear-interval':
      console.log('previous interval was cleared');
      return {
        ...state,
        intervalID: state.intervalID ? Number(clearInterval(state.intervalID)) : state.intervalID
      }

    case 'setup-interval':
      return {
        ...state,
        intervalID: Number(action.payload)
      }

    case 'set-active-image': 
      return {
        ...state,
        activeImage: Number(action.payload)
      }

    case 'slide-to-next-active-image':
      return {
        ...state,
        activeImage: (state.activeImage + 1) % NUMBER_OF_BANNER_CAROUSEL_IMAGE
      }
    
    default:
      throw new Error('Action Type is not supported');
  }
}

const Banner = () => {
  const [{activeImage, howManyImagesHasLoaded}, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: 'images-loaded', payload: 0});
    return () => {
      dispatch({type: 'images-loaded', payload: -1});;
    }
  }, [])

  function startInterval() {
    console.log('the startInterval is called')
    dispatch({type: 'clear-interval'})
    const id = Number(
      setInterval(()=>{
        console.log('new interval has started');
        dispatch({type: 'slide-to-next-active-image'})
      }, 5000)
    )
    dispatch({type: 'setup-interval', payload: id})
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
                      dispatch({type: 'loaded-an-image'})
                      dispatch({type: 'set-active-image', payload: 0})
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
                      dispatch({type: 'loaded-an-image'})
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
                      dispatch({type: 'loaded-an-image'})
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
                      dispatch({type: 'loaded-an-image'})
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
                      dispatch({type: 'loaded-an-image'})
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
                  dispatch({type: 'set-active-image', payload: 0})
                  startInterval();
                }}></button>
              <button className={`${activeImage === 1 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  dispatch({type: 'set-active-image', payload: 1});
                  startInterval();
                }}></button>
              <button className={`${activeImage === 2 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  dispatch({type: 'set-active-image', payload: 2});
                  startInterval();
                }}></button>
              <button className={`${activeImage === 3 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  dispatch({type: 'set-active-image', payload: 3});
                  startInterval();
                }}></button>
              <button className={`${activeImage === 4 ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={() => {
                  dispatch({type: 'set-active-image', payload: 4});
                  startInterval();
                }}></button>
          </div>
        </div>

        {/* Banner Arrows */}
    </section>
  )
}

export default Banner