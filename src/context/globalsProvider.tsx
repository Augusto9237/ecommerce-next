"use client";

import { ReactNode, useState } from "react";
import { ContextGlobals } from "./contextGlobals";
import { useGetCategoriesQuery } from "../../saleor/api";

interface GlobalsProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalsProps) => {
    const [sidebarState, setSidebarState] = useState(false);
    const { data: categories, loading: loadingCategories, error } = useGetCategoriesQuery()
  
    return (
        <ContextGlobals.Provider value={{
            sidebarState,
            setSidebarState,
            categories,
            loadingCategories
        }}>
            {children}
        </ContextGlobals.Provider>
    )
}