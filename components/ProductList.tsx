import { useProductGetThreeElementsQuery } from "../saleor/api";
import { CardProduct } from "./CardProduct";

export function ProductList() {
  const { data, loading, error } = useProductGetThreeElementsQuery();
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!{error.message}</div>

  if (data) {
    const latestProducts = data.products.edges || [];
   
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {latestProducts.map((product) => (
          <CardProduct title={product.node.name} urlImg={product.node.thumbnail.url} />
        ))}
      </div>
    );

  }

}
