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