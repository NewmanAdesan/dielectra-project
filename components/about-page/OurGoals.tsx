import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Container from '../general/Container'
import ListItem from '../general/ListItem'

const OurGoals = () => {
  return (
    <section className='bg-white-1' id='our-goals'>
            <Container>
                    <h2>Our <span className='text-blue-1'>Goals</span></h2>

                    <Fade cascade direction='up' triggerOnce>
                        <ul className='flex flex-col gap-6'>
                                <ListItem text='To offer solutions and directions to the development of the Nigerian power industry. '/>
                                <ListItem text='To deliver resourcefully on engineering projects that meet international best practices, with a focus on the locsl content development and competitiveness'/>
                                <ListItem text='To constantly promote research and development through partnership with Universities and research institutes in the deployment of the Nigerian rich energy landscape, for the growth of the power industry and the prosperity of the people.'/>
                                <ListItem text='To provide excellent training solutions required in emerging business environment of the electricity industry driven by competitive market and digital technologies.'/>
                                <ListItem text='To foster a rich and viable pool of power market for the African continent through a super-grid interconnection'/>
                        </ul>
                    </Fade>
            </Container>
    </section> 
  )
}

export default OurGoals