import { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { CollapsibleCategories } from "./CollapsibleCategories"

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <main className="relative bg-background-50 max-w-[1200px] pt-36 overflow-hidden h-full min-h-screen overflow-y-auto flex-1 mx-auto max-sm:px-2 max-sm:mb-14 max-sm:pt-[7.5rem]">
            <Sidebar>
                <CollapsibleCategories/>
            </Sidebar>
            {children}
        </main>
    )
}
