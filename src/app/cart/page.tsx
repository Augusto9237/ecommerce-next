'use client'
import { useLocalStorage } from "react-use";
import { useCheckoutByTokenQuery, useProductGetThreeElementsQuery } from "../../../saleor/api";
import { CardCheckout } from "../../components/CardCheckout"
import { Container } from "../../components/Container"


export default function Cart() {
    const [token] = useLocalStorage('token');
    const { data, loading, error } = useCheckoutByTokenQuery({
        variables: { checkoutToken: token },
        skip: !token,
    });



    return (
        <Container>
            <div className="flex flex-col gap-3 p-4">
                {data?.checkout?.lines.map((item) => {
                    const variant = item?.variant;
                    const product = item?.variant.product;
                    const price = item.variant.pricing?.price?.gross.amount
                    return (
                        <CardCheckout
                            key={item.id}
                            title={product.name}
                            urlImg={product?.thumbnail?.url || ""}
                            pricing={price} />
                    )
                })}
            </div>
        </Container>
    )
}