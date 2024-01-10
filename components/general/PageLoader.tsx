'use client'

import { usePagesContext } from "@/context/PagesContextProvider";

const PageLoader = () => {

  // consume the pages context
  const pagesContextData = usePagesContext();
  let pageIsLoading;

  if (pagesContextData) {
    const {pageIsLoading} = pagesContextData;

    return <div className={`fixed top-[72px] md:top-[96px] w-screen h-screen bg-white backdrop-blur-md z-[1000] ${pageIsLoading ? 'opacity-100' : 'opacity-0'}`}>
        <img src="/loading-1.gif" alt="Loading... Please Wait" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
    </div>
  }

}

export default PageLoader