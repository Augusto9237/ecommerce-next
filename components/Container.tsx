import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <main className="max-w-[1160px] h-fit flex-1 mx-auto py-3 pb-3 max-sm:px-2 overflow-y-auto max-sm:mb-14">
            {children}
        </main>
    )
  }
  