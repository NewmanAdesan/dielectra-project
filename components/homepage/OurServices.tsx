import Link from 'next/link';
import React from 'react'
import Service from './Service';

const OurServices = () => {
  return (
    <section className='mt-52 xs:mt-40'>
      <div className='p-5 md:px-10 max-w-7xl mx-auto'>
        <h2 className='text-center text-[24px] font-semibold leading-[140%] mb-5 md:text-[40px]'>Our <span className='text-blue-1'>Services</span></h2>
        <Service src='/homepage/service1.png' alt='Service 1 - Engineering and Contruction' index='01' title='Engineering and Construction' desc='We offer our resourcefulness on engineering design, procurement and construction to ensure that you actualize your desired bespoke electrical projects.' changePosition={false} last={false}/>
        <Service src='/homepage/operation-and-maintenance.jpg' alt='Service 2 - Operation and Maintenance' index='02' title='Operation and Maintenance' desc='We carry out preventive, predictive and corrective maintenance on your electrical network and its associated equipment.' changePosition={true} last={false}/>
        <Service src='/homepage/consulting.jpg' alt='Service 3 - Consulting' index='03' title='Consulting' desc='We specialize in providing comprehensive electrical consultation services tailored to meet the unique needs of our clients.' changePosition={false} last={true}/>
  
        <Link href='/business' className='block w-max rounded-lg border-2 border-blue-1 py-2 px-8 mt-8 mx-auto lg:hidden text-blue-1'>View all</Link>
      </div>


        
    </section>
  )
}

export default OurServices;