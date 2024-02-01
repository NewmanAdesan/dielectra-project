import React from 'react'
import Container from '../general/Container'
import CustomImgElement from '../general/CustomImgElement'
import ListItem from '../general/ListItem'

const OurPhilosophy = () => {
  return (
    <section className='bg-white-1' id='our-philosophy'>
        <Container>
                <h2>Our <span className='text-blue-1'>Philosophy</span></h2>

                <div className='grid gap-4 mt-3 2md:grid-cols-2'>
                    <CustomImgElement 
                        src='/about-page/ourPhilosophyIMG.jpg'
                        alt='Energy as a currency'
                        sizeClasses='w-full h-[200px] max-w-[335px] rounded-xl justify-self-center md:max-w-[504px] md:h-[380px]'
                        // sizes='(max-width: 768px) 335px, 504px'
                    />
                    
                    <ul className=' flex flex-col gap-3 md:gap-4 2md:self-center'>
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