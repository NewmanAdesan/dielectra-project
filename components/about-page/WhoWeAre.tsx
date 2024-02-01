import React from 'react'
import Container from '../general/Container'
import ListItem from '../general/ListItem'

const WhoWeAre = () => {
  return (
    <section id='who-we-are'>
        <Container>
                <h2>Who are we?</h2>
                <ul className='flex flex-col gap-3 md:gap-4'>
                    <ListItem text='We are a power engineering firm with the main focus on innovative design, development and deployment of solutions, for the ultimate purpose of achieving sufficient and reliable electric power in the lives of people.' />
                    
                    <ListItem text='Registered since 2011 in Nigeria as a Limited Liability Company, (RC 939782), we have continued to expand and excel in our various businesses and projects using the fascinating tools of Engineering, Procurement, Construction, Consulting and Training.' />

                    <li className='flex items-start gap-2 pl-1'>
                        <div className='bg-red-1 w-2 h-2 flex-none mt-1 rounded-full'></div>
                        <span><span className='text-red-1 mr-2'>Vision statement:</span><span>You can connect to power anywhere anytime</span></span>
                    </li>

                </ul>
        </Container>
    </section>
  )
}

export default WhoWeAre