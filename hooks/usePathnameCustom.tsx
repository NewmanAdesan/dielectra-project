import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { usePagesContext } from '@/context/PagesContextProvider';


// the return type of the hook
type PathnameStateTuple = {
  pathname: string,
  handleClick: (newPath: string) => void 
};

/**
 * Custom hook to handle pathname changes and immediately highlight the corresponding link.
 * It synchronizes the pathname with a state to avoid lag when the link is clicked.
 */
const usePathnameCustom = (): PathnameStateTuple => {
  const path = usePathname();
  const [pathname, setPathname] = useState<string>(path);
  const pagesContextData = usePagesContext();

  useEffect(() => {
    // Call the handleClick function when the browser url pathname changes. 
    // This happens when any link is clicked
    handleClick(pathname);
  }, [path]);


  /**
   * Handles the click event on a link.
   * If the pathname of the URL is different from the current pathname state,
   * update the state to trigger the highlighting effect.
   * @param {string} newPath - The new pathname obtained from the URL.
   */
  const handleClick = (newPath: string): void => {
    if (path !== newPath) {
      setPathname(newPath);
      if (pagesContextData) {
        const {setPageIsLoading} = pagesContextData;
        setPageIsLoading(true);
      }
    }
  };

  return {pathname, handleClick};
};

export default usePathnameCustom;
