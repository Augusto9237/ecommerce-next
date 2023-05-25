"use client";

import { ReactNode, useState } from "react";
import { ContextGlobals } from "./contextGlobals";

interface GlobalsProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalsProps) => {
    const [sidebarState, setSidebarState] = useState(false)
  
    return (
        <ContextGlobals.Provider value={{
            sidebarState,
            setSidebarState
        }}>
            {children}
        </ContextGlobals.Provider>
    )
}