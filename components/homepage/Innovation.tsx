import Link from 'next/link'
import React from 'react'
import CustomImgElement from '../general/CustomImgElement'

const Innovation = () => {
  return (
    <section className='relative overflow-hidden'>
        
        {/* Background Presentation Element 1 */}
        <img src="/homepage/middle-circle-ripple.png" alt="" aria-hidden="true" className='absolute top-0 right-0 -translate-y-[40%] translate-x-[40%] w-32' />

        {/* Background Presentation Element 2 */}
        <img src="/homepage/middle-circle-ripple.png" alt="" aria-hidden="true" className='w-48 absolute top-24 left-1/2 -translate-x-1/2 xs:w-64 xs:top-36 sm:w-72 sm:top-40 md:w-[27%] md:top-24 md:left-[43%]'/>

        {/* Actual Section */}
        <div className='px-5 py-10 max-w-7xl mx-auto'>

          {/* Section Heading */}
          <h2 className='text-center text-black text-[24px] font-semibold leading-[140%] mb-5 md:text-[40px]'>Innovations</h2>

          {/* Section Content */}
          <div className='grid gap-5 md:grid-cols-2 md:items-center'>

              {/* Section Content Images */}
              <div className='grid gap-3'>
                  <CustomImgElement 
                      src='/homepage/innovation1.png'
                      alt='An Image Showing Innovation'
                      sizeClasses='w-[205px] h-[137px] xs:w-[305px] xs:h-[204px] sm:w-[405px] sm:h-[270px] md:w-[255px] md:h-[170px] 2md:w-[305px] 2md:h-[204px] lg:w-[355px] lg:h-[237px] xl:w-[409px] xl:h-[272px]'
                      // sizes='(max-width: 440px) 205px, (max-width: 640px) 305px, (max-width: 768px) 405px, (max-width: 876px) 255px, (max-width: 1024px) 305px, (max-width: 1280px) 355px, 409px'
                  />
                  <CustomImgElement 
                      src='/homepage/innovation2.png'
                      alt='An Image Showing Innovation'
                      sizeClasses='w-[255px] h-[168px] xs:w-[355px] xs:h-[234px] sm:w-[455px] sm:h-[300px] md:w-[305px] md:h-[201px] 2md:w-[355px] 2md:h-[234px] lg:w-[405px] lg:h-[266px] xl:w-[503px] xl:h-[334px] ml-auto'
                      // sizes='(max-width: 440px) 255px, (max-width: 640px) 355px, (max-width: 768px) 455px, (max-width: 876px) 305px, (max-width: 1024px) 355px, (max-width: 1280px) 405px, 503px'
                  />
              </div>

              {/* Section Content Text */}
              <div className='text-black'>

                  {/* Section Content Text Title */}
                  <h3 className='text-xl font-semibold text-black mb-2 lg:text-2xl'>Investing in Africa’s Future: Our commitment to Youth Development In Technology</h3>

                  {/* Section Content Text Description */}
                  <p className='text-base font-normal mb-8 lg:text-xl '>Empower the future of electrical excellence through our innovative training program, virtual reality labs, mobile learning solutions, industry expert instructors, cross cultural collaborations, sustainable practices and entrepreneurial empowerment</p>

                  {/* Section Content Text Link*/}
                  <Link href='/' className='flex gap-2 items-center py-[10px] px-[30px] border border-blue-1 rounded-lg text-base font-semibold text-blue-1 w-max mx-auto md:mx-0'>Learn more</Link>
              </div>

          </div>
            
        </div>
    </section>
  )
}

export default Innovation