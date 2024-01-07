import { CustomFILLImageProps } from '@/common.types';
import Image from 'next/image';
import React, { useState } from 'react'

const CustomFILLImage = ({src, alt, onLoad, sizes='100vw'}: CustomFILLImageProps) => {
  const [downloaded, setDownloaded] = useState(false)
  return (
    <Image src={src}
           alt={alt}
           fill
           style={{
                objectFit: 'cover',
                overflow: 'hidden',
                objectPosition: 'center',
                opacity: downloaded ? '1' : '0',
                transition: 'opacity 1s ease'
        }}
        onLoad={(e) => {
                setDownloaded(true);
                onLoad && onLoad();
        }}
        sizes={sizes}
    />
  )
}

export default CustomFILLImage