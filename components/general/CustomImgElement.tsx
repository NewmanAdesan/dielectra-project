'use client'

import { CustomImgElementProps } from '@/common.types';
import { useEffect, useRef, useState } from 'react'

const CustomImgElement = ({src, alt, sizeClasses, special=false}: CustomImgElementProps) => {
    const [downloaded, setDownloaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
      let imgRefCurrent = imgRef.current;
      if (imgRefCurrent) {
        const handleImageLoad = () =>  setDownloaded(true);

        if (imgRefCurrent.complete) {
            setDownloaded(true);
        }
        else {
            imgRefCurrent.addEventListener('load', handleImageLoad);
        }
        
        return () => {
            imgRefCurrent?.removeEventListener('load', handleImageLoad)
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
                      objectPosition: !special ? 'center' : '20% 20%',
                      opacity: downloaded ? '1' : '0',
                      transition: 'opacity 1s ease'
              }}
          />
      </div>
    )
  }

export default CustomImgElement