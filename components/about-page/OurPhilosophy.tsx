import React from 'react'
import Container from '../general/Container'
import CustomImage from '../general/CustomImage'
import ListItem from '../general/ListItem'

const OurPhilosophy = () => {
  return (
    <section className='bg-white-1'>
        <Container>
                <h2 className='text-center text-2xl text-black mb-5 font-semibold leading-[33.6px] md:text-[40px] md:leading-[56px]'>Our <span className='text-blue-1'>Philosophy</span></h2>

                <div className='grid gap-4 mt-3 2md:grid-cols-2'>
                    <CustomImage 
                        src='/about-page/ourPhilosophyIMG.png'
                        alt='Energy as a currency'
                        sizeClasses='w-full h-[200px] max-w-[335px] rounded-xl justify-self-center md:max-w-[504px] md:h-[380px]'
                    />
                    
                    <ul className='text-base leading-[22.4px] font-medium md:text-2xl md:leading-[33.6px] flex flex-col gap-3 md:gap-4 2md:text-xl 2md:leading-[28px] 2md:self-center'>
                            <ListItem text='Energy is the common currency of the universe. Societies rise and fall in response to how much they know of, and actively deploy the energy di electics.' />
                            <ListItem text='The ascendancy and penetration of electric energy in homes, offices factories, communities and streets is the new revolution of the modern digital world' />
                            <ListItem text='At Dielectra Technologies, we posses the formula to bring energy to you in electricity form. And the frontiers keep growing.' />
                    </ul>

                </div>
        </Container>
    </section>
  )
}

export default OurPhilosophy