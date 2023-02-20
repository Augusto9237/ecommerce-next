import { CardProduct } from "./CardProduct";

export function ProductList() {
  return (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3">
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
  </div>
  );
}
