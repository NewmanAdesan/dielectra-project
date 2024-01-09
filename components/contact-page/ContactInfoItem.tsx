import { ContactInfoItemProps } from '@/common.types'
import React from 'react'

const ContactInfoItem = ({src, text, bold} : ContactInfoItemProps) => {
  return (
    <li className='flex gap-2 items-start'>
        <img src={src} alt="" aria-hidden='true' width={24} height={24} />
        <p className={`${bold ? 'font-medium' : 'font-normal'}  lg:text-xl`}>{text}</p>
    </li>
  )
}

export default ContactInfoItem