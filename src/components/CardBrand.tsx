import Link from "next/link";

export function CardBrand({ title, urlImg }) {
    return (
        <Link href='/' className="rounded-2xl flex flex-row h-[180px] max-w-[360px] min-w-fit justify-center items-center  overflow-hidden bg-gradient-to-r from-detailsSecondary-100">
            <div className="flex flex-col flex-1 h-full items-center justify-around px-4">
                <div>
                    Logo
                </div>
                <strong className="text-2xl text-background-50">UP to 80% OFF</strong>
            </div>
            <div className="overflow-hidden flex flex-1 h-full justify-center">
                <img src={urlImg} className="h-full" />
            </div>
        </Link>
    )
}