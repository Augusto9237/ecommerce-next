'use client'
import { useContext } from "react"
import { ContextGlobals } from "../context/contextGlobals"
import clsx from "clsx"

interface SideBarProps {
    children: React.ReactNode
}

export function Sidebar({ children }: SideBarProps) {
    const { sidebarState } = useContext(ContextGlobals)
    return (
        <nav className={clsx("overflow-hidden fixed z-0 sm:hidden flex flex-col py-4 pt-32 gap-8 top-0 left-0 w-52 rounded-sm h-full bg-background-50 shadow-2xl shadow-detailsSecondary-100 delay-80 duration-500",
            {
                'translate-x-0': sidebarState === true,
                '-translate-x-56': sidebarState === false
            })}>
            {children}
        </nav>
    )
}