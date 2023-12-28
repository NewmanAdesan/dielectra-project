import { MobileNavProps } from '@/common.types'
import React from 'react'

const MobileNav = ({isMobileNavActive, setIsMobileNavActive}:MobileNavProps) => {
  return (
    <nav className={`fixed top-[72px] ${isMobileNavActive ? 'left-0' : '-left-full'} md:top-[96px] transition-[left] duration-300`}>MobileNav</nav>
  )
}

export default MobileNav