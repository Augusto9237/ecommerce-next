'use client';
import { Dispatch, SetStateAction, createContext } from "react";
import { GetCategoriesQuery } from "../../saleor/api";

export interface GlobalContextProps {
    sidebarState: boolean;
    setSidebarState: Dispatch<SetStateAction<boolean>>;
    categories: GetCategoriesQuery | undefined
}

export const ContextGlobals = createContext<GlobalContextProps>(null!);