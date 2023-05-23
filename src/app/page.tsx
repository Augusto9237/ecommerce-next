'use client'
import { useProductGetThreeElementsQuery } from "../../saleor/api";
import { CardProduct } from "../components/CardProduct";
import { Container } from "../components/Container";

export default function Home() {
    const { data, loading, error } = useProductGetThreeElementsQuery();
    const latestProducts = data?.products!.edges || [];

    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-background-50">
                {latestProducts?.map((product) => (
                    <CardProduct title={product.node.name} urlImg={product.node.thumbnail!.url} />
                ))}
            </div>
        </Container>
    )
}