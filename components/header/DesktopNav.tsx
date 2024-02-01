'use client'

import { NavLinkUnderlineStatus } from '@/common.types';
import usePathnameCustom from '@/hooks/usePathnameCustom';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from './DesktopNav.module.css';

const NAV_LINK_UNDERLINE_STATUS: NavLinkUnderlineStatus = {
  '/': {
    left: '16px',
    width: '48px'
  },
  '/business': {
    left: '104px',
    width: '100px'
  },
  '/about-us': {
    left: '250px',
    width: '73px'
  },
  '/contact-us': {
    left: '363px',
    width: '87px'
  },
  '/academy': {
    left: '487px',
    width: '78px'
  },
  '/forum': {
    left: '603px',
    width: '56px'
  },
  '/magazine': {
    left: '697px',
    width: '80px'
  },
}

const DesktopNav = () => {
  /*
    granted when the pathname of the url changes (url router)
    the corresponding link hightlights making it different from the rest.
    this is done simply by adding a class to style all the links CONDITIONALLY. if the pathname of the url corresponds to the href of the link

    the issue is that it seems when the link is clicked, its correponding page component is first fetched before the brower url changes
    therefore there is going to be some sort of lag before the link highlights. 

    i want to remove this lag. i want to instead immediately highlight the screen and then show a loading screen that would not cover the header
    to do this, i will synchronise the url pathname gotten with a state
   */

  const {pathname, handleClick} = usePathnameCustom();
  const [linksHidden, setLinksHidden] = useState(true);
  useEffect(() => setLinksHidden(false), [])
  

  return (
    <nav>
      <ul className={`${styles['nav-list']} relative hidden lg:flex items-center justify-center gap-6 p-2`}>
        <li>
          <Link 
            href='/'
            aria-label='Go to Dielectra Home Page' 
            className={`${pathname==='/' ? 'text-color-2' : ''} ${styles['link-1']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/')}>
                Home
          </Link>
        </li>
        <li>
          <Link href='/business'
            aria-label='Explore Dielectra Businesses' 
            className={`${pathname==='/business' ? 'text-color-2' : ''} ${styles['link-2']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>{
              handleClick('/business');
            }}>
                Businesses<span className='text-[20px] opacity-0'>&gt;</span>
          </Link>
        </li>
        <li>
          <Link 
            href='/about-us' 
            aria-label='Learn About Dielectra' 
            className={`${pathname==='/about-us' ? 'text-color-2' : ''} ${styles['link-3']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/about-us')}>
                About us
          </Link>
        </li>
        <li>
          <Link 
            href='/contact-us' 
            aria-label='Contact Dielectra' 
            className={`${pathname==='/contact-us' ? 'text-color-2' : ''} ${styles['link-4']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/contact-us')}>
                Contact us
          </Link>
        </li>
        <li>
          <Link 
            href='/academy' 
            aria-label='Discover Dielectra Academy' 
            className={`${pathname==='/academy' ? 'text-color-2' : ''} ${styles['link-5']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/academy')}>
                Academy
          </Link>
        </li>
        <li>
          <Link 
            href='/forum' 
            aria-label='Visit Our Forum' 
            className={`${pathname==='/forum' ? 'text-color-2' : ''} ${styles['link-6']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/forum')}>
                Forum
          </Link>
        </li>
        <li>
          <Link 
            href='/magazine' 
            aria-label='Check Out Dielectra Magazine' 
            className={`${pathname==='/magazine' ? 'text-color-2' : ''} ${styles['link-7']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/magazine')}>
                Magazine
          </Link>
        </li>
        <span className={`absolute top-8 h-1 bg-color-2 transition-all duration-200 ease-in-out ${linksHidden ? 'hidden' : 'block'}`} style={{
          left: NAV_LINK_UNDERLINE_STATUS[pathname]?.left ?? '16px',
          width: NAV_LINK_UNDERLINE_STATUS[pathname]?.width ?? '48px' 
        }}></span>
      </ul>
    </nav>
  )
}

export default DesktopNav;