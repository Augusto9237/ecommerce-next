export function CardProduct({title, urlImg}) {
    return (
        <div className="bg-white flex flex-col justify-center items-center rounded-md p-2 object-cover">
            <img src={urlImg} />
            <strong>{title}</strong>
            <span>R$ 1.000,00</span>
            <button className="bg-blue-500 p-2 w-full rounded my-2 hover:bg-blue-600">
                <span className="text-white font-semibold">Comprar</span>
            </button>
        </div>
    )
}