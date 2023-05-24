import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <main className="bg-background-50 max-w-[1200px] overflow-hidden max-h-screen overflow-y-auto flex-1 mx-auto max-sm:px-2 max-sm:mb-14">
            {children}
        </main>
    )
  }
  