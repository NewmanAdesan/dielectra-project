
import { ConsultingSpecialization } from "@/data"
import CustomImgElement from '../general/CustomImgElement'
import Container from '../general/Container'
import ListItem from "../general/ListItem"
import { Fade } from "react-awesome-reveal"


const Consulting = () => {
  return (
    <section id="consulting">
        <Container>
                <h2>Consulting</h2> 

                <div className='grid sm:gap-6 md:gap-8 sm:grid-cols-2'>     
                    <ul className='flex flex-col gap-3'>
                        {
                            ConsultingSpecialization.map((item, index) => (
                                <Fade direction="up" delay={150 * index} triggerOnce key={index}>
                                    <ListItem text={item} />
                                </Fade>

                            ))
                        }
                    </ul>

                    <div className='hidden sm:block sm:row-start-1 '>
                        <CustomImgElement 
                            src='/business-page/consulting-img-1.png'
                            alt=''
                            sizeClasses='w-full h-[262px] max-w-[335px] rounded-xl md:max-w-[504px] md:h-[380px] mb-5 lg:mb-10'
                            // sizes='(max-width: 768px) 335px, 504px'
                        />
                        <CustomImgElement 
                            src='/homepage/consulting.jpg'
                            alt=''
                            sizeClasses='w-full h-[272px]  max-w-[335px] rounded-xl md:max-w-[504px] md:h-[320px] lg:h-[380px]'
                            // sizes='(max-width: 768px) 335px, 504px'
                        />
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default Consulting