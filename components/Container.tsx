import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <main className="max-w-[1160px] h-fit flex-1 mx-auto">
            {children}
        </main>
    )
  }
  