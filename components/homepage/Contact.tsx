"use client"

import { useRef} from 'react'
import { Fade } from 'react-awesome-reveal';
import CustomImgElement from '../general/CustomImgElement'

const Contact = () => {
  const nameInputRef = useRef<null | HTMLInputElement>(null);
  const emailInputRef = useRef<null | HTMLInputElement>(null);
  const messageInputRef = useRef<null | HTMLInputElement>(null);

  function handleFormSubmit() {
  }

  return (
    <section className='md:bg-gray-3'>

        {/* Section Container */}
        <div  className='px-5 py-10 max-w-7xl mx-auto'>

            {/* section heading */}
            <div className='pl-2 relative mb-7'>
                <h2 className='text-xl text-start font-semibold mb-1 xs:text-3xl leading-[140%] xs:leading-[48px]'>
                        <span className='text-black block'>Got any</span>
                        <span className='text-red-1 block'>Questions?</span>
                </h2>    
                <p className='text-sm font-normal text-black xs:text-base'>Speak with a customer care agent</p>
                <div className='absolute top-0 left-0 w-1 h-[30px] rounded-xl bg-red-1 xs:h-[51px]'></div>
                <div className='absolute top-[34px] left-0 w-1 h-[18px] rounded-xl bg-black xs:h-[30px] xs:top-[55px]'></div>
            </div>


            {/* section content */}
            <div className='grid gap-10 sm:grid-cols-2'>
                {/* contact image */}
                <CustomImgElement
                    src='/homepage/contact-img.png'
                    alt='Contact Us'
                    sizeClasses='w-full h-60 rounded-lg sm:self-center sm:col-start-2 xs:h-72 sm: justify-self-center max-w-[500px]'
                    // sizes='(max-width: 440px) 100vw, 500px'
                 />

                {/* contact form */}
                <form className='flex flex-col gap-3 text-base font-normal text-black sm:row-start-1 md:bg-white md:rounded-xl md:p-5 md:shadow-xl' onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                }}>
                    <Fade direction='left' cascade triggerOnce>
                        <input type="text" placeholder='Name' ref={nameInputRef} className='w-full py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2' required autoComplete='false'/>
                        <input type="email" placeholder='Email Address' ref={emailInputRef}  className='w-full py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2' required autoComplete='false'/>
                        <textarea placeholder='Your message' className='w-full h-56 py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2' required autoComplete='false'></textarea>
                        <button type='submit' className='w-full bg-blue-1 py-[10px] px-5 flex justify-center items-center text-center text-white text-base font-medium rounded-md'>Send message</button>
                    </Fade>
                </form>
            </div>


        </div>
    </section>
  )
}

export default Contact