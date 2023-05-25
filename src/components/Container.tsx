import { ReactNode } from "react"
import { Sidebar } from "./Sidebar"

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <main className="relative bg-background-50 max-w-[1200px] pt-36 overflow-hidden h-full min-h-screen overflow-y-auto flex-1 mx-auto max-sm:px-2 max-sm:mb-14">
            <Sidebar>
                teste
            </Sidebar>
            {children}
        </main>
    )
}
