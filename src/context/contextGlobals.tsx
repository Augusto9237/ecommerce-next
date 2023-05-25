'use client';
import { Dispatch, SetStateAction, createContext } from "react";


export interface GlobalContextProps {
    sidebarState: boolean;
    setSidebarState: Dispatch<SetStateAction<boolean>>
}

export const ContextGlobals = createContext<GlobalContextProps>(null!);