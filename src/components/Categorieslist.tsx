import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useGetCategoriesQuery, useProductGetThreeElementsQuery } from "../../saleor/api";
import { CardCategory } from "./CardCategory";

export function CatergoriesList() {
    const { data, loading, error } = useGetCategoriesQuery()
    const latestCategories = data?.categories?.edges || [];

    return (
        <section className="w-full overflow-hidden">
            <header className="flex items-center justify-between border-b-[1px] border-solid border-border-100">
                <h1 className="text-2xl px-4 p-2 border-b-2 border-solid border-detailsPrimary-100 max-sm:text-xl">Top Categorias</h1>
                <Link href='/' className="flex items-center gap-2 text-lg pr-4">
                    <span>Todas</span>
                    <FiChevronRight className="mt-1 text-detailsPrimary-100"/>
                </Link>
            </header>
            <div className="flex flex-1 w-full p-4 mb-4 gap-4 max-sm:overflow-x-auto">
                {latestCategories?.map((categry) => (
                    <CardCategory title={categry.node.name} urlImg={categry.node.backgroundImage?.url} />
                ))}
            </div>
        </section>
    );

}