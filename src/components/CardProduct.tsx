import Link from "next/link";

export function CardProduct({ id, title, urlImg, pricing }) {
    return (
        <Link href={`/details/${id}`} className="bg-background-100 flex flex-col justify-center items-center rounded-2xl  overflow-hidden shadow-lg object-cover">
            <img src={urlImg} className="h-full" />
            <div className="flex flex-col w-full bg-background-50 p-3">
                <strong>{title}</strong>
                <span className="text-detailsSecondary-500">R$ {pricing}</span>
                <button className="bg-detailsPrimary-100 p-2 w-full rounded mt-2 hover:bg-blue-600">
                    <span className="text-background-50 font-semibold">Comprar</span>
                </button>
            </div>
        </Link>
    )
}