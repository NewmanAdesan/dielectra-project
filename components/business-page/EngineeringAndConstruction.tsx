
import Container from '../general/Container'
import OverlayImage from '../general/OverlayImage'

const EngineeringAndConstruction = () => {
  return (
    <section id='engineering-and-construction'>
        <Container>
            <h2>Engineering and Construction</h2>

            <p className='mb-8 md:mb-6'>
            Dependable high voltage power system is a fascinating incarnation of engineering and physics, so that bulk electrical energy from remote generation locations can be safely delivered to the cities and rural communities. We offer our resourcefulness in engineering design, procurement and construction to ensure that you actualize your desired bespoke electrical projects 
            </p>

            <div className='flex flex-wrap gap-6 justify-center'>
              {/* <Fade cascade> */}
                <OverlayImage src='/business-page/voltage-lines.png' alt='' overlayText='High and low voltage lines' sizeClasses='w-full custom-max-width h-[306px]'
                sizes='413px' />
                <OverlayImage src='/business-page/substation.jpg' alt='' overlayText='Modern state of the art substations' sizeClasses='w-full custom-max-width h-[306px]' sizes='413px' />
                <OverlayImage src='/business-page/control-system.png' alt='' overlayText='Industrial control systems' sizeClasses='w-full custom-max-width h-[306px]' sizes='413px' />
                <OverlayImage src='/business-page/substation-automation.jpg' alt='' overlayText='Substation automatic system' sizeClasses='w-full custom-max-width h-[306px]' sizes='413px' />
                <OverlayImage src='/business-page/voltage-lines.png' alt='' overlayText='Industrial electrical systems' sizeClasses='w-full custom-max-width h-[306px]' sizes='413px'/>
              {/* </Fade> */}
            </div>
        </Container>
    </section>
  )
}

export default EngineeringAndConstruction