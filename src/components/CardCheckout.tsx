export function CardCheckout({ title, urlImg, pricing }) {
    return (
        <div className="relative bg-background-100 flex flex-row rounded-md justify-center items-center overflow-hidden shadow-md object-cover">
            <button className="absolute top-2 right-4">🗑</button>
            <img src={urlImg} className="h-[60px] w-[60px]" />
            <div className="flex flex-col w-full bg-background-50 p-3">
                <strong>{title}</strong>
                <div className="flex flex-1 justify-between">
                    <span className="text-detailsSecondary-500 flex flex-1">R$ {pricing}</span>
                    <input className="max-w-[20px]" type="number" value={1} />
                </div>
            </div>
        </div>
    )
}