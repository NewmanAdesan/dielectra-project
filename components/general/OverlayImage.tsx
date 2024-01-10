import { CustomImgElementProps, OverlayImageProps } from "@/common.types"
import CustomImgElement from "./CustomImgElement"


const OverlayImage = ({src, alt, sizeClasses, sizes='', overlayText}: OverlayImageProps) => {
  return (
    <div className={`relative ${sizeClasses} rounded-xl overflow-hidden`}>
        <CustomImgElement src={src} alt={alt} sizeClasses={sizeClasses} sizes={sizes}/>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-black-00 to-black-90">
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 text-white text-center text-lg font-semibold">{overlayText}</span>
        </div>
    </div>
  )
}

export default OverlayImage