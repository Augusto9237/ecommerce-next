
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useProductGetThreeElementsQuery } from "../../saleor/api";
import { CardProduct } from "./CardProduct";

export function ProductList() {
  const { data, loading, error } = useProductGetThreeElementsQuery();
  const latestProducts = data?.products!.edges || [];

  return (
    < >
      <header className="flex items-center justify-between mb-5 border-b-[1px] border-solid border-border-100">
        <h1 className="text-2xl px-4 p-2 border-b-2 border-solid border-detailsPrimary-100 max-sm:text-xl">Produtos</h1>
        <Link href='/' className="flex items-center gap-2 text-lg pr-4">
          <span>Todos</span>
          <FiChevronRight className="mt-1 text-detailsPrimary-100"/>
        </Link>
      </header>
      <div className="grid grid-cols-2 px-4 mb-4 md:grid-cols-5 gap-4">
        {latestProducts?.map((product) => (
          <CardProduct title={product.node.name} urlImg={product.node.thumbnail!.url} />
        ))}
      </div>
    </>
  );

}


