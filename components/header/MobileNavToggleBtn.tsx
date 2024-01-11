import { MobileNavProps } from '@/common.types';
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

const MobileNavToggleBtn = ({isMobileNavActive, setIsMobileNavActive}:MobileNavProps) => {

  function handleClick() {
    setIsMobileNavActive(
        (prevState: boolean) => !prevState
    )
  }

  return (
    <button onClick={() => handleClick()} className='lg:hidden flex flex-col gap-1 relative w-8 h-6' aria-label={`${isMobileNavActive ? 'Hide' : 'Show'} Navigation Links`}  aria-expanded={isMobileNavActive}>
        <Image 
            src='/menu.png'
            width={32}
            height={4}
            alt="Show Navigation Links"
            aria-hidden='true'
            className={`${isMobileNavActive ? 'absolute top-1/2 -translate-y-1/2 rotate-45': 'static top-0 -translate-y-0 rotate-0'} transition-transform duration-300`}
        />
        <Image 
            src='/menu.png'
            width={32}
            height={4}
            alt="Show Navigation Links"
            aria-hidden='true'
            className={`${isMobileNavActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        />
        <Image 
            src='/menu.png'
            width={32}
            height={4}
            alt="Show Navigation Links"
            aria-hidden='true'
            className={`${isMobileNavActive ? 'absolute top-1/2 -translate-y-1/2 -rotate-45': 'static top-0 -translate-y-0 -rotate-0'}  transition-transform duration-300`}
        />
    </button>
  )
}

export default MobileNavToggleBtn