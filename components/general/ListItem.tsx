import React from 'react'

const ListItem = ({text}:{text: string}) => {
  return (
    <li className='flex items-start gap-2 pl-1'>
        <div className='bg-black w-2 h-2 flex-none mt-[5px] md:mt-[10px] rounded-full'></div>
        <span>{text}</span>
    </li>
  )
}

export default ListItem