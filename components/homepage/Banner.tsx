'use client'

import { BannerDispatchAction, BannerInitialState } from '@/common.types' ;
import { BannerImagesData } from '@/data/homepage' ;
import Image from 'next/image';
import React, { useEffect, useReducer } from 'react' ;
import CustomFILLImage from '../CustomFILLImage';
import CustomImage from '../CustomImage';
import BannerCarouselImage from './BannerCarouselImage' ;
import BannerCarouselPaginationButton from './BannerCarouselPaginationButton' ;


const NUMBER_OF_BANNER_CAROUSEL_IMAGE = BannerImagesData.length;


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

function reducer(state: BannerInitialState, action: BannerDispatchAction): BannerInitialState {
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

  function handlePaginationButtonClick(imageIndex: number) {
    dispatch({type: 'set-active-image', payload: imageIndex})
    startInterval();
  }
  
  return (
    <section className='w-full h-screen max-h-[681px] relative'>
        {/* Banner Images */}
        <div className={`w-full h-full relative bg-color-3 ${howManyImagesHasLoaded === 0 ? 'image-loading' : ''}`}>
            {BannerImagesData.map((imageData, index) => (
              <BannerCarouselImage src={imageData.src}
                    key={index}
                    alt={imageData.alt}
                    dispatch={dispatch}
                    index={index}
                    activeImage={activeImage}
                    totalImages={NUMBER_OF_BANNER_CAROUSEL_IMAGE}
                    startInterval={startInterval}
                    howManyImagesHasLoaded={howManyImagesHasLoaded}
              />
            ))}
        </div>

        {/* Banner Text */}
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-homepage-banner-text max-w-[653px] mx-auto p-5 rounded-xl text-center text-white'>
            <h1 className='text-[32px] font-bold leading-[140%] mb-3 md:text-[40px]'>Connect to Power <span className='text-color-1'>Anywhere</span></h1>
            <p className='text-[16px] font-normal leading-[140%] md:text-[20px]'>Providing affordable energy solutions to people no matter their location around Africa</p>
        </div>

        {/* Banner Pagination */}
        <div className='absolute bottom-16 xs:bottom-12 left-1/2 -translate-x-1/2 '>
          <div className='flex gap-1 justify-center w-20 rounded-lg bg-black p-1'>
              {BannerImagesData.map((_, index) => (
                  <BannerCarouselPaginationButton 
                      key={index}
                      activeImage={activeImage} 
                      index={index} 
                      handleClick={() => handlePaginationButtonClick(index)} />
              ))}
          </div>
        </div>

        {/* Banner Trusted By section */}
        <div className='absolute top-full -translate-y-[25%] left-1/2 -translate-x-1/2 rounded-xl shadow-2xl w-homepage-banner-text bg-white-1 p-5 max-w-[500px] sm:max-w-[750px]' >
          <h3 className='text-center text-[20px] font-semibold text-red-600 mb-2'>Trusted By:</h3>
          <div className='flex flex-wrap justify-around items-center gap-6'>
              <CustomImage 
                  src='/homepage/ikeja-electric.png' 
                  alt='Ikeja Electricity Company'
                  sizeClasses='w-[70px] sm:w-[90px] h-[55px] sm:h-[71px]'
                  sizes='(max-width: 649px) 70px, 90px'
              />
              <CustomImage
                  src='/homepage/eko-electric.png'
                  alt='Eko Electricity Company'
                  sizeClasses='w-[68px] sm:w-[98px] h-[34px] sm:h-[49px]'
                  sizes='(max-width: 649px) 68px, 98px'
              />
              <CustomImage
                  src='/homepage/Babcock.png'
                  alt='Babcock University'
                  sizeClasses='w-[60px] sm:w-[70px] h-[80px] sm:h-[93px]'
                  sizes='(max-width: 649px) 60px, 70px'
              />
              <CustomImage
                  src='/homepage/Olam.png'
                  alt='Olam Industry'
                  sizeClasses='w-[93px] sm:w-[113px] h-[27px] sm:h-[33px]'
                  sizes='(max-width: 649px) 93px, 113px'
              />
          </div>
        </div>
    </section>
  )
}

export default Banner