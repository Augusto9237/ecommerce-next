import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useProductGetThreeElementsQuery } from "../../saleor/api";
import { CardBrand } from "./CardBrand";

export function BrandList() {
    const { data, loading, error } = useProductGetThreeElementsQuery();
    const latestProducts = data?.products!.edges || [];

    return (
        <section className="w-full overflow-hidden">
            <header className="flex items-center justify-between border-b-[1px] border-solid border-border-100">
                <h1 className="text-2xl px-4 p-2 border-b-2 border-solid border-detailsPrimary-100 max-sm:text-xl">Top Marcas</h1>
                <Link href='/' className="flex items-center gap-2 text-lg pr-4">
                    <span>Todos</span>
                    <FiChevronRight className="mt-1 text-detailsPrimary-100"/>
                </Link>
            </header>
            <div className="flex flex-1 w-full p-4 py-6 mb-4 gap-4 overflow-x-auto">
                {latestProducts?.map((product) => (
                    <CardBrand title={product.node.name} urlImg={product.node.thumbnail!.url} />
                ))}
            </div>
        </section>
    );

}