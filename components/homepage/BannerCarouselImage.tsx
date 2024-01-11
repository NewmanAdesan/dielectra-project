import { BannerCarouselImage } from '@/common.types'
import Image from 'next/image';
import React from 'react'


const BannerCarouselImage = ({src, alt, dispatch, index, activeImage, totalImages, startInterval, howManyImagesHasLoaded}: BannerCarouselImage) => {
  /* 
        the idea looks complicated but is quite simple.
        this component will be called for each carousel image.

        but according to my design, i do not want to download all the carousel images at simultaneously
        rather i want to download the first image only, then after that download the second image only, then third image e.t.c
        this is why the howManyImagesHasLoaded state Exists.

        by my design, after the banner component has rendered, the howManyImagesHasLoaded is set to 0.
        at this point i want to ONLY download the first image. that's why the condition (index === 0 ) exist

        other images will only download as the howManyImagesHasLoaded increment
        therefore, an event handler is on each image that states 'ONCES AN IMAGES HAS FINISHED DOWNLOADING, INCREMENT THE howManyImagesHasLoaded STATE'

        thus the condition ( howManyImageHasLoaded >= index ) which means basically 
        'WHEN STATE BECOMES(>=) 1 DOWNLOAD THE SECOND CAROUSEL IMAGE',
        'WHEN STATE BECOMES(>=) 2 DOWNLOAD THE THIRD CAROUSEL IMAGE',
        AND SO ON
  */
  if (index === 0 || howManyImagesHasLoaded >= index)
    return (
        <Image src={src}
            alt={alt}
            fill
            style={{
                    objectFit: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    opacity: activeImage === index ? '1' : '0',
                    transition: 'opacity 1s ease'
            }}
            onLoad={() => {
                    dispatch({type: 'loaded-an-image'})
                    if (index === 0) dispatch({type: 'set-active-image', payload: 0});  // when the first image has loaded, we immediately make it the active image
                    if (index === totalImages - 1) startInterval(); // when the last image has loaded, we start the interval
            }}
            priority={true}
        />
    )
  else return null;
}

export default BannerCarouselImage