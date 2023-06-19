import Link from "next/link";
import { formatReal } from "../utils/formatReal";

export function CardProduct({ id, title, urlImg, pricing }) {
    return (
        <Link href={`/details/${id}`} className="bg-background-100 flex flex-col justify-center items-center rounded-2xl  overflow-hidden shadow-md object-cover">
            <img src={urlImg} className="h-full" />
            <div className="flex flex-col w-full bg-background-50 p-3">
                <strong className="max-md:hidden">
                    {title.length > 16 ? title.slice(0, 20) + '...' : title}
                </strong>
                <strong className="max-md:flex hidden">
                    {title.length > 16 ? title.slice(0, 20) + '...' : title}
                </strong>
                <span className="text-detailsSecondary-500">{formatReal(pricing)}</span>
                <button className="bg-detailsPrimary-100 p-2 w-full rounded mt-2 hover:bg-blue-600">
                    <span className="text-background-50 font-semibold">Comprar</span>
                </button>
            </div>
        </Link>
    )
}