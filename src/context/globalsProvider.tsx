"use client";

import { ReactNode, useEffect, useState } from "react";
import { ContextGlobals } from "./contextGlobals";
import { useCreateCheckoutMutation, useGetCategoriesQuery } from "../../saleor/api";
import { useLocalStorage } from "react-use";

interface GlobalsProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalsProps) => {
    const [sidebarState, setSidebarState] = useState(false);
    const { data: categories, loading: loadingCategories, error } = useGetCategoriesQuery();
    const [token, setToken] = useLocalStorage("token");
    const [createCheckout, { data, loading }] = useCreateCheckoutMutation();

    useEffect(() => {
        async function doCheckout() {
            const { data } = await createCheckout();
            const token = data?.checkoutCreate?.checkout?.token;

            setToken(token);
        }

        doCheckout();
    }, []);

    console.log(data);
    

    return (
        <ContextGlobals.Provider value={{
            sidebarState,
            setSidebarState,
            categories,
            loadingCategories,
            token
        }}>
            {children}
        </ContextGlobals.Provider>
    )
}