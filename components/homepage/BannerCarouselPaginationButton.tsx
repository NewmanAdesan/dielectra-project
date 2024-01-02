import { BannerCarouselPaginationButton } from '@/common.types'
import React from 'react'

const BannerCarouselPaginationButton = ({activeImage, index, handleClick}: BannerCarouselPaginationButton) => {
  return (
    <button className={`${activeImage === index ? 'w-4 bg-neutral-200' : 'w-2 bg-neutral-500'} h-2  rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out`} onClick={handleClick}></button>
  )
}

export default BannerCarouselPaginationButton