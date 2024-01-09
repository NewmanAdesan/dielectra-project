import Link from 'next/link'
import React from 'react'
import Container from '../general/Container'
import CustomImage from '../general/CustomImage'
import ListItem from '../general/ListItem'

const OperationAndMaintenance = () => {
  return (
    <section>
        <Container>
            <h2>Operation and Maintenance</h2> 

            <div className='grid gap-4 2md:grid-cols-2'>
                <CustomImage 
                    src='/business-page/operation-img.png'
                    alt=''
                    sizeClasses='w-full h-[262px] max-w-[335px] rounded-xl justify-self-center md:max-w-[504px] md:h-[380px]'
                />
                
                <ul className='flex flex-col gap-3 md:gap-4 2md:self-center row-start-1'>
                        <ListItem text='We carryout predictive, preventive and corrective maintenance on your electrical network and its associated equipment.' />
                        <ListItem text='We carry out tests and delivery sound test reports, with sound recommendations for sustainability.' />
                        <ListItem text='We recruit plant operators system electrical operators for your substations.' />
                        <Link href='/' className='hidden w-max rounded-lg border-2 border-blue-1 py-2 px-8 mt-8 mx-auto lg:block text-blue-1 text-center text-base font-medium'>View our maintenance profile</Link>
                </ul>
            </div>

            <Link href='/' className='block w-full max-w-max rounded-lg border-2 border-blue-1 py-2 px-8 mt-8 mx-auto lg:hidden text-blue-1 text-center text-base font-medium'>View our maintenance profile</Link>
        </Container>
    </section>
  )
}

export default OperationAndMaintenance