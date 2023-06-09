import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
export function CardCheckout({ title, urlImg, pricing }) {
    return (
        <div className="relative flex flex-row rounded-md justify-center items-center overflow-hidden shadow-md">
            <button className="absolute top-2 right-4">🗑</button>
            <img src={urlImg} className="h-[80px] w-[80px]" />
            <div className="flex flex-col h-full w-full p-3">
                <strong>{title}</strong>
                <div className="flex flex-1 justify-between">
                    <span className="text-detailsSecondary-500 flex flex-1">R$ {pricing}</span>
                    <div className="flex items-center gap-2">
                        <button>
                            <BiPlusCircle />
                        </button>
                        <span className="w-2">1</span>
                        <button>
                            <BiMinusCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}