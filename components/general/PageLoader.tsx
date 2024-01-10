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
          pageIsLoading && <div className="fixed right-5 bottom-10 bg-black opacity-70 backdrop-blur-2xl p-10 rounded-ss-3xl rounded-ee-3xl z-[1000]">
              <div className="w-14 h-14 border-[6px] border-blue-1 border-l-transparent animate-spin rounded-full"></div>
          </div>
        }
    </>
  }

  return <></>

}

export default PageLoader