import { ReactNode, useContext } from "react"
import { Sidebar } from "./Sidebar"
import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"
import { ContextGlobals } from "../context/contextGlobals"
import clsx from "clsx"

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    const {sidebarState} = useContext(ContextGlobals);
    return (
        <main className="relative bg-background-50 max-w-[1200px] pt-36 overflow-hidden h-full min-h-screen overflow-y-auto flex-1 mx-auto max-sm:px-2 max-sm:mb-14 max-sm:pt-[7.5rem]">
            <Sidebar>
                <Link href='/' className={clsx("items-center  justify-between  text-base font-medium pl-3 p-2 hover:bg-background-100", {
                    'hidden': sidebarState === false,
                    'flex': sidebarState === true
                })}>
                    <span className="">Categoria 1</span>
                    <FiChevronRight size={18} className="mt-[2px] text-detailsPrimary-100"/>
                </Link>
            </Sidebar>
            {children}
        </main>
    )
}
