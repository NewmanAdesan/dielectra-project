'use client'

import { CustomImageProps } from '@/common.types';
import Image from 'next/image';
import React, { useState } from 'react'

const CustomImage = ({src, alt, sizeClasses, onLoad, sizes='100vw', priority=false}: CustomImageProps) => {
  const [downloaded, setDownloaded] = useState(false)
  return (
    <div className={`${downloaded ? '' : 'image-loading rounded-md'} ${sizeClasses} relative overflow-hidden`}>
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
            priority={priority}
        />
    </div>
  )
}

export default CustomImage