'use client'

import React, { createContext, useContext, useState } from "react";

type pagesContextType = {
    pageIsLoading: boolean,
    setPageIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const pagesContext = createContext<pagesContextType|null>(null);

const PagesContextProvider = ({children}: {children: React.ReactNode}) => {

  const [pageIsLoading, setPageIsLoading] = useState(true)

  return (
    <pagesContext.Provider value={{ pageIsLoading, setPageIsLoading }}>
        {children}
    </pagesContext.Provider>
  )
}

function usePagesContext(): pagesContextType | null {
    const contextData = useContext(pagesContext);
    if (contextData === undefined) throw new Error("The Component Trying to consume the 'pagesContext' is not a descendant of the 'pagesContextProvider Component'");
    return contextData;
}

export {PagesContextProvider, usePagesContext};