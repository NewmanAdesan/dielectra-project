"use client"

import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import Logo from './Logo'
import MobileNav from './MobileNav'
import MobileNavToggleBtn from './MobileNavToggleBtn'

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  
  
  return (


    /* The Header */
    <header className='header-show p-3 fixed -top-full left-0 z-30 flex justify-center bg-color-3 backdrop-blur-md w-full h-header-mobile-height lg:h-header-desktop-height md:p-4 transition-[top] duration-300'>

          {/* The Header Container */}
          <div className='flex items-center justify-between gap-3 w-full max-w-[1280px]'>

              {/* logo */}
              <Logo />

              {/* desktop navigation links */}
              <DesktopNav />

              {/* mobile navigation links */}
              <MobileNav isMobileNavActive={isMobileNavActive} setIsMobileNavActive={setIsMobileNavActive}/>

              {/* mobile navigation toggle button */}
              <MobileNavToggleBtn isMobileNavActive={isMobileNavActive} setIsMobileNavActive={setIsMobileNavActive}/>
          </div>
    </header>
  )
}

export default Header