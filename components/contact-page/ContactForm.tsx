'use client'

import { useRef } from 'react'

const ContactForm = () => {

    const nameInputRef = useRef<null | HTMLInputElement>(null);
    const emailInputRef = useRef<null | HTMLInputElement>(null);
    const messageInputRef = useRef<null | HTMLInputElement>(null);
  
    function handleFormSubmit() {
  
    }

  return (
    <form className='flex flex-col gap-6 text-base font-normal text-black bg-white px-3 py-5 rounded-xl md:shadow-xl' onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
    }}>

        <input type="text" placeholder='Name' ref={nameInputRef} className='w-full py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2'/>

        <input type="email" placeholder='Email Address' ref={emailInputRef}  className='w-full py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2'/>

        <textarea placeholder='Your message' className='w-full h-56 py-[10px] px-3 rounded-lg bg-gray-3 border border-gray-2'></textarea>

        <button type='submit' className='w-full bg-blue-1 py-[10px] px-5 flex justify-center items-center text-center text-white text-base font-medium rounded-md'>Send message</button>
    </form>
  )
}

export default ContactForm