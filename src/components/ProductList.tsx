
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useProductGetThreeElementsQuery } from "../../saleor/api";
import { CardProduct } from "./CardProduct";

export function ProductList() {
  const { data, loading, error } = useProductGetThreeElementsQuery();
  const latestProducts = data?.products!.edges || [];

  return (
    <section>
      <header className="flex items-center justify-between mb-5 border-b-[1px] border-solid border-border-100 px-4 max-sm:px-1">
        <h1 className="text-2xl  p-2 border-b-2 border-solid border-detailsPrimary-100 max-sm:text-xl">Produtos</h1>
        <Link href='/' className="flex items-center gap-2 text-lg pr-4 max-sm:pr-2">
          <span>Todos</span>
          <FiChevronRight className="mt-1 text-detailsPrimary-100" />
        </Link>
      </header>
      <div className="grid grid-cols-2 px-4 mb-4 md:grid-cols-5 gap-4">
        {latestProducts?.map((product) => (
          <CardProduct key={product.node.id} id={product.node.id} title={product.node.name} urlImg={product.node.thumbnail!.url} pricing={product.node.pricing?.priceRangeUndiscounted?.stop?.gross.amount} />
        ))}
      </div>
    </section>
  );

}


