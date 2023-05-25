import Link from "next/link";

export function CardCategory({ title, urlImg }) {
    return (
        <Link href='/' className="flex flex-col h-[172px] min-w-[132px] max-w-fit justify-center items-center  overflow-hidden">
            <div className="overflow-hidden w-[132px] h-[132px] rounded-full bg-background-100 p-2">
                <img src={urlImg} className="h-full w-full" />
            </div>
            <strong>{title}</strong>

        </Link>
    )
}