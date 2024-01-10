
'use client'

import { usePagesContext } from '@/context/PagesContextProvider';
import { useEffect } from 'react'

const usePageLoaderSetter = (showPageLoader: boolean) => {

    const pagesContextData = usePagesContext();

    useEffect(() => {
      if (pagesContextData) {
        const {setPageIsLoading} = pagesContextData;
        setPageIsLoading(showPageLoader);
      }
    }, [])
}

export default usePageLoaderSetter;

