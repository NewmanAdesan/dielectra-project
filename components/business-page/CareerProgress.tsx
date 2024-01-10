import Link from 'next/link'
import React from 'react'
import Container from '../general/Container'
import CustomImage from '../general/CustomImage'
import ListItem from '../general/ListItem'

const CareerProgress = () => {
  return (
    <section>
        <Container>
            <h2>Training, Certification and Career progression</h2> 
            
            <p className='mb-3'>The landscape of todays electricity demands a workforce which possesses the dextrity to combine</p>
                
            <ul className='flex flex-col gap-6 mb-5'>
                    <ListItem text='We carryout predictive, preventive and corrective maintenance on your electrical network and its associated equipment.' />
                    <ListItem text='We carry out tests and delivery sound test reports, with sound recommendations for sustainability.' />
                    <ListItem text='We recruit plant operators system electrical operators for your substations.' />
            </ul>

            <div className='grid xs-2:grid-cols-2 gap-5 lg:gap-10'>
                <CustomImage 
                    src='/business-page/training-img-1.png'
                    alt=''
                    sizeClasses='w-full h-[262px] max-w-[335px] rounded-xl justify-self-center md:max-w-[504px] md:h-[380px]'
                    sizes='(max-width: 768px) 335px, 504px'
                />
                <CustomImage 
                    src='/business-page/training-img-2.png'
                    alt=''
                    sizeClasses='w-full h-[262px] max-w-[335px] rounded-xl justify-self-center md:max-w-[504px] md:h-[380px]'
                    sizes='(max-width: 768px) 335px, 504px'
                />
            </div>

            <Link href='/' className='block w-full max-w-max rounded-lg border-2 border-blue-1 py-2 px-8 mt-5 lg:mt-10 mx-auto text-blue-1 text-center text-base font-medium'>Visit  our Academy now</Link>


        </Container>
    </section>
  )
}

export default CareerProgress