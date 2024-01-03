import Link from 'next/link'
import React from 'react'
import CustomImage from '../CustomImage'

const Innovation = () => {
  return (
    <section className='relative overflow-hidden'>
        
        <img src="/homepage/middle-circle-ripple.png" alt="" aria-hidden="true" className='w-48 h-48 absolute top-24 left-1/2 -translate-x-1/2'/>
        <div className='px-5 py-10'>
        <h2 className='text-center text-black text-[24px] font-semibold leading-[140%] mb-5 md:text-[40px]'>Innovations</h2>
        <div className='grid gap-5 md:grid-cols-2 md:items-center'>
          {/* The Images */}
          <div className='grid gap-3'>
            <CustomImage 
                src='/homepage/innovation1.png'
                alt='An Image Showing Innovation'
                sizeClasses='w-[205px] h-[137px] xs:w-[305px] xs:h-[204px] sm:w-[405px] sm:h-[270px] md:w-[255px] md:h-[170px] 2md:w-[305px] 2md:h-[204px] lg:w-[355px] lg:h-[237px] xl:w-[409px] xl:h-[272px]'
            />
            <CustomImage 
                src='/homepage/innovation2.png'
                alt='An Image Showing Innovation'
                sizeClasses='w-[255px] h-[168px] xs:w-[355px] xs:h-[234px] sm:w-[455px] sm:h-[300px] md:w-[305px] md:h-[201px] 2md:w-[355px] 2md:h-[234px] lg:w-[405px] lg:h-[266px] xl:w-[503px] xl:h-[334px] ml-auto'
            />
          </div>

          {/* The Text Content */}
          <div className='text-black'>
            <h3 className='text-xl font-semibold text-black mb-2 lg:text-2xl'>Investing in Africa’s Future: Our commitment to Youth Development In Technology</h3>
            <p className='text-base font-normal mb-8 lg:text-xl '>Empower the future of electrical excellence through our innovative training program, virtual reality labs, mobile learning solutions, industry expert instructors, cross cultural collaborations, sustainable practices and entrepreneurial empowerment</p>
            <Link href='/' className='flex gap-2 items-center py-[10px] px-[30px] border border-blue-1 rounded-lg text-base font-semibold text-blue-1 w-max mx-auto md:mx-0'>Learn more <span className='w-5 h-5'>&gt;</span></Link>
          </div>

        </div>
            
        </div>
    </section>
  )
}

export default Innovation