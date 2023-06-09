'use client'
import { useProductGetThreeElementsQuery } from "../../../saleor/api";
import { CardCheckout } from "../../components/CardCheckout"
import { Container } from "../../components/Container"


export default function Cart() {
    const { data, loading, error } = useProductGetThreeElementsQuery();
    const latestProducts = data?.products!.edges || [];

    return (
        <Container>
            <div className="flex flex-col gap-3 p-4">
                {latestProducts?.map((product) => (
                    <CardCheckout
                        key={product.node.id}
                        title={product.node.name}
                        urlImg={product.node.thumbnail!.url}
                        pricing={product.node.pricing?.priceRangeUndiscounted?.stop?.gross.amount} />
                ))}
            </div>
        </Container>
    )
}