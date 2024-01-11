import { MobileNavProps } from '@/common.types'
import { usePagesContext } from '@/context/PagesContextProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MobileNav = ({isMobileNavActive, setIsMobileNavActive}:MobileNavProps) => {

  const pathname = usePathname();
  const pagesContextData = usePagesContext();

  let activeLinkHighlighter;

  switch (pathname) {
    case "/":
      activeLinkHighlighter = '54px'
      break;

    case "/business":
      activeLinkHighlighter = '104px'
      break;

    case "/about-us":
      activeLinkHighlighter = '156px'
      break;

    case "/contact-us":
      activeLinkHighlighter = '206px'
      break;

    case "/academy":
      activeLinkHighlighter = '257px'
      break;

    case "/market":
      activeLinkHighlighter = '309px'
      break;

    case "/blog":
      activeLinkHighlighter = '360px'
      break;
    default:
      break;
  }

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, linkHref: string) {

      e.stopPropagation();

      // make the page loader active
      if (pagesContextData) {
        const {setPageIsLoading} = pagesContextData;
        setPageIsLoading(true);
      }

      // make the mobile nav inactive
      setIsMobileNavActive(false);
  }

  return (
    <nav 
      className={`fixed top-[72px] ${isMobileNavActive ? 'left-0' : '-left-[100vw]'} md:top-[96px] transition-[left] duration-300 w-screen h-mobile-nav-height bg-black-30 backdrop-blur-sm`} 
      onClick={() => setIsMobileNavActive(false) }>
          <ul className='bg-white-2 w-full h-full max-w-80 pt-10 pl-8 flex flex-col gap-2 relative text-[18px]' onClick={(e) => e.stopPropagation()}>
              <li className='mobile-nav-list-item'>
                  <Link 
                      href='/'
                      aria-label='Go to Dielectra Home Page'
                      onClick={(e) => handleLinkClick(e, '/')}>
                        Home
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                      href='/business'
                      aria-label='Explore Dielectra Businesses'
                      onClick={(e) => handleLinkClick(e, '/business')}>
                        Businesses
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                    href='/about-us' 
                    aria-label='Learn About Dielectra'
                    onClick={(e) => handleLinkClick(e, '/about-us')}>
                        About us
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                    href='/contact-us' 
                    aria-label='Contact Dielectra'
                    onClick={(e) => handleLinkClick(e, '/contact-us')}>
                        Contact us
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                    href='/academy' 
                    aria-label='Discover Dielectra Academy'
                    onClick={(e) => handleLinkClick(e, '/academy')}>
                        Academy
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                    href='/market' 
                    aria-label='Visit Our Equipment Market'
                    onClick={(e) => handleLinkClick(e, '/market')}>
                        Market
                  </Link>
              </li>
              <li className='mobile-nav-list-item'>
                  <Link 
                    href='/blog' 
                    aria-label='Read Dielectra Blog' 
                    onClick={(e) => handleLinkClick(e, '/blog')}>
                        Blog
                  </Link>
              </li>
              <span className='block bg-blue-1 w-[6px] h-4 absolute left-[28px] rounded transition-[top] duration-200 ease-out' style={{top: activeLinkHighlighter}}></span>
          </ul>
    </nav>
  )
}

export default MobileNav

