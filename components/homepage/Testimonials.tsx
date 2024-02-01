import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Testimony from './Testimony'

const Testimonials = () => {
  return (
    <section>
        <div className='px-5 py-10 md:px-10 max-w-7xl mx-auto'>

            {/* Section Heading */}
            <h2 className='text-center text-black text-[24px] font-semibold leading-[140%] mb-3 md:text-[40px]'>Testimonials</h2>

            {/* Section Content */}
            <div className='flex flex-wrap gap-10 justify-center'>
              <Fade cascade damping={.4}>
                <Testimony testimony='Training sessions with Dielectra are loaded with awesomeness. Our workers have always returned with the excitement to innovate on something new. And it always works for us' testifier="Head, Learning and Development EKEDC" testifierCaricature="/homepage/caricature1.png" />
                <Testimony testimony='Of course, the difference is very clear on the campus. From the new substation project to the technical training. Dielectra has been consistent with professionalism' testifier="Head, HR, Babcock University." testifierCaricature="/homepage/caricature2.png" />
                <Testimony testimony='Today, we are an active participant in the Nigerian electricity market. Our production capacity is on the rise on this singular account. Dielectra facilitated our access to bulk power on the grid' testifier="Olam Grouo, Nigeria." testifierCaricature="/homepage/caricature1.png" />
              </Fade>
            </div>
        </div>
    </section>
  )
}

export default Testimonials