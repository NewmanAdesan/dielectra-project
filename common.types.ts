import { Dispatch, SetStateAction } from "react"

export type MobileNavProps = {
    isMobileNavActive: boolean, 
    setIsMobileNavActive: Dispatch<SetStateAction<boolean>>
}

export type NavLinkUnderlineStatus = {
    [key: string]: {
      left: string;
      width: string;
    };
};


export type BannerInitialState = {
  activeImage: number,
  howManyImagesHasLoaded: number,
  intervalID: number | null,
}


export type BannerDispatchAction = {
  type: 'images-loaded' | 'loaded-an-image' | 'clear-interval' | 'setup-interval' | 'set-active-image' | 'slide-to-next-active-image',
  payload?: number
}


export type BannerCarouselImage = {
  src: string, 
  alt: string, 
  dispatch: React.Dispatch<BannerDispatchAction>, 
  index: number, 
  activeImage: number,
  totalImages: number,
  startInterval: () => void,
  howManyImagesHasLoaded: number
}

export type BannerCarouselPaginationButton = {
  activeImage: number, 
  index: number, 
  handleClick: () => void
}


export type ImageData = {
  src: string,
  alt: string,
}


export type Banner2 = {
  bannerText: string
} & ImageData


export type CustomFILLImageProps = {
  onLoad?: Function,
  sizes?: string,
} & ImageData


export type CustomImageProps = {
  sizeClasses: string
} & CustomFILLImageProps


export type ServiceProps = {
  src: string,
  alt: string, 
  title: string, 
  desc: string, 
  index: string,
  changePosition: boolean,
  last: boolean,
}


export type TestimonyProps = {
  testimony: string,
  testifier: string,
  testifierCaricature: string,
}

export type ContactInfoItemProps = {
  src: string,
  text: string,
  bold: boolean
}

export type CoreValueCardProps = {
  src: string,
  title: string,
  desc: string
}

export type CustomImgElementProps = {
  src: string,
  alt: string,
  sizeClasses: string
  sizes?: string
}

export type OverlayImageProps = CustomImgElementProps & {
  overlayText: string,
}