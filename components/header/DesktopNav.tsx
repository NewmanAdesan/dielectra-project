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
    left: '244px',
    width: '71px'
  },
  '/contact-us': {
    left: '357px',
    width: '88px'
  },
  '/academy': {
    left: '485px',
    width: '78px'
  },
  '/market': {
    left: '603px',
    width: '56px'
  },
  '/blog': {
    left: '700px',
    width: '35px'
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
    to do this, i will synchronise the pathname gotten with a state
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
            shallow aria-label='Go to Dielectra Home Page' 
            className={`${pathname==='/' ? 'text-color-2' : ''} ${styles['link-1']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/')}>
                Home
          </Link>
        </li>
        <li>
          <Link href='/business' 
            shallow 
            aria-label='Explore Dielectra Businesses' 
            className={`${pathname==='/business' ? 'text-color-2' : ''} ${styles['link-2']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>{
              handleClick('/business');
              console.log('get business page: ' + new Date());
            }}>
                Businesses<span className='text-[20px]'>&gt;</span>
          </Link>
        </li>
        <li>
          <Link 
            href='/about-us' 
            shallow 
            aria-label='Learn About Dielectra' 
            className={`${pathname==='/about-us' ? 'text-color-2' : ''} ${styles['link-3']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/about-us')}>
                About us
          </Link>
        </li>
        <li>
          <Link 
            href='/contact-us' 
            shallow 
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
            href='/market' 
            aria-label='Visit Our Equipment Market' 
            className={`${pathname==='/market' ? 'text-color-2' : ''} ${styles['link-6']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/market')}>
                Market
          </Link>
        </li>
        <li>
          <Link 
            href='/blog' 
            aria-label='Read Dielectra Blog' 
            className={`${pathname==='/blog' ? 'text-color-2' : ''} ${styles['link-7']} ${linksHidden ? 'hidden' : 'block'}`}
            onClick={()=>handleClick('/blog')}>
                Blog
          </Link>
        </li>
        <span className={`absolute top-8 h-1 bg-color-2 transition-all duration-200 ease-in-out ${linksHidden ? 'hidden' : 'block'}`} style={{
          left: NAV_LINK_UNDERLINE_STATUS[pathname]?.left || '16px',
          width: NAV_LINK_UNDERLINE_STATUS[pathname]?.width || '48px' 
        }}></span>
      </ul>
    </nav>
  )
}

export default DesktopNav;