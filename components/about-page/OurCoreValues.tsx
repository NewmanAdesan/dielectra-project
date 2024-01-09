import React from 'react'
import Container from '../general/Container'
import CoreValueCard from './CoreValueCard'

const OurCoreValues = () => {
  return (
    <section>
        <Container>
            <h2>Our <span className='text-red-1'>Core</span> <span>Values</span></h2>
            <div className='flex flex-wrap gap-4 justify-center'>
                <CoreValueCard src='/about-page/teamwork-icon.svg' title='Team work:' desc='Our heritage, our culture' />
                <CoreValueCard src='/about-page/reliability-icon.svg' title='Reliability:' desc='Like the rising sun in the morning' />
                <CoreValueCard src='/about-page/thoroughness-icon.svg' title='Thoroughness:' desc='We go all the way beyond the expectations of our clients' />
                <CoreValueCard src='/about-page/transparency-icon.svg' title='Transparency:' desc='A fundamental guidepost in our engegements' />
                <CoreValueCard src='/about-page/innovativeness-icon.svg' title='Innovativeness:' desc='We ceaselessly imagine new possibilities and reach for them.' />
            </div>
        </Container>
    </section>
  )
}

export default OurCoreValues