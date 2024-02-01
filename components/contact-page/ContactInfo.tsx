import React from 'react'
import ContactInfoItem from './ContactInfoItem'

const ContactInfo = () => {
  return (
    <ul className='flex flex-col gap-4 text-base leading-[140%] text-black'>
        <ContactInfoItem 
            src='/contact-page/location-icon.svg' 
            text='Lagos office: Block 1, Road C, Off Obafemi Awolowo way, Igbogbo-ikorodu, Lagos'
            bold={true}
        />
        <ContactInfoItem 
            src='/contact-page/mail-icon.svg' 
            text='Info@dielectra16@gmail.com'
            bold={false}
        />
        <ContactInfoItem 
            src='/contact-page/mail-icon.svg' 
            text='Info@dielectratechnologies.com'
            bold={false}
        />
        <ContactInfoItem 
            src='/contact-page/phone-icon.svg' 
            text='+234 703 2784 024'
            bold={false}
        />
        <ContactInfoItem 
            src='/contact-page/phone-icon.svg' 
            text='+234 802 4115 234'
            bold={false}
        />
    </ul>
  )
}

export default ContactInfo