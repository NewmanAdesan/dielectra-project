'use client'

import { CustomImgElementProps } from '@/common.types';
import { useEffect, useRef, useState } from 'react'

const CustomImgElement = ({src, alt, sizeClasses}: CustomImgElementProps) => {
    const [downloaded, setDownloaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
      if (imgRef.current) {
        const handleImageLoad = () =>  setDownloaded(true);

        if (imgRef.current.complete) {
            setDownloaded(true);
        }
        else {
            imgRef.current.addEventListener('load', handleImageLoad);
        }
        
        return () => {
            imgRef.current?.removeEventListener('load', handleImageLoad)
        }
      }
    }, [])
    

    return (
      <div className={`${downloaded ? '' : 'image-loading rounded-md'} ${sizeClasses} relative overflow-hidden`}>
          <img 
                src={src}
                alt={alt}
                ref={imgRef}
                style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      overflow: 'hidden',
                      objectPosition: 'center',
                      opacity: downloaded ? '1' : '0',
                      transition: 'opacity 1s ease'
              }}
          />
      </div>
    )
  }

export default CustomImgElement