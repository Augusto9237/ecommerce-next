export function CardProduct() {
    return (
        <div className="bg-white flex flex-col justify-center items-center rounded-md p-2 object-cover">
            <img src="https://ecoms1-nyc3.nyc3.cdn.digitaloceanspaces.com/1186/@v3/1648530260760-air_jordan_1_mid_chicago_black_toe_masculino_1535_3_20200604185404.png" />
            <strong>Air Jordan Mid 1</strong>
            <span>R$ 1.000,00</span>
            <button className="bg-blue-500 p-2 w-full rounded my-2 hover:bg-blue-600">
                <span className="text-white font-semibold">Comprar</span>
            </button>
        </div>
    )
}