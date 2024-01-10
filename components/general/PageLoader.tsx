'use client'

import { usePagesContext } from "@/context/PagesContextProvider";

const PageLoader = () => {

  // consume the pages context
  const pagesContextData = usePagesContext();
  let pageIsLoading;

  if (pagesContextData) {
    const {pageIsLoading} = pagesContextData;

    return <>
        {
          true && <div className="fixed right-5 bottom-10 bg-black opacity-70 backdrop-blur-2xl p-10 rounded-ss-3xl rounded-ee-3xl z-[1000]">
              <div className="w-14 h-14 border-[6px] border-blue-1 border-l-transparent animate-spin rounded-full"></div>
          </div>
        }
    </>
    // return <div className={`fixed top-[72px] md:top-[96px] w-screen h-screen bg-white backdrop-blur-md z-[1000] ${pageIsLoading ? 'opacity-100' : 'opacity-0'}`}>
    //     <img src="/loading-1.gif" alt="Loading... Please Wait" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
    // </div>
  }

  return <></>

}

export default PageLoader