import { TestimonyProps } from '@/common.types'
import React from 'react'

const Testimony = ({testimony, testifier, testifierCaricature}: TestimonyProps) => {
  return (
    <div className='flex py-[10px] px-5 flex-col justify-center items-start gap-5 rounded-xl shadow-xl border border-gray-1 bg-white-2 w-[calc(100vw - 40px)] max-w-[335px]'>
        {/* The Testimony */}
        <p className='text-sm xs:text-lg leading-[140%] font-normal text-black'>"{testimony}"!</p>

        {/* The Testifier */}
        <div className='flex gap-2 items-center'>
                {/* the testifier caricature */}
                <img src={testifierCaricature} alt="" aria-hidden="true" />

                {/* the testifier name */}
                <span className='capitalize text-base xs:text-lg text-black'>{testifier}</span>
        </div>
    </div>
  )
}

export default Testimony