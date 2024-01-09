import { CoreValueCardProps } from '@/common.types'
import React from 'react'
import styles from './CoreValueCard.module.css';

const CoreValueCard = ({src, title, desc}: CoreValueCardProps) => {
  return (
    <div className={`bg-gray-3 border border-gray-1 rounded-xl flex flex-col gap-4 items-center p-5 w-full ${styles['custom-max-width']}`}>
        {/* card icon */}
        <img src={src} alt='' aria-hidden='true' className='mx-auto lg:w-16 lg:h-16' width={40} height={40} />

        <div className='text-center'>
            {/* card title */}
            <h3 className='text-xl leading-[28px] font-semibold lg:text-[28px] lg:leading-[39.2px]'>{title}</h3>
            
            {/* card description */}
            <p className='text-base leading-[22.4px] font-normal mt-3 lg:text-2xl lg:leading-[33.6px]'>{desc}</p>
        </div>
    </div>
  )
}

export default CoreValueCard