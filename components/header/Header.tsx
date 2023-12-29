"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Btn1 from './Btn1'
import DesktopNav from './DesktopNav'
import Logo from './Logo'
import MobileNav from './MobileNav'
import MobileNavToggleBtn from './MobileNavToggleBtn'

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <header className='p-3 fixed top-0 left-0 z-30 flex justify-center bg-header-bg w-full h-header-mobile-height md:h-header-desktop-height md:p-4'>
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