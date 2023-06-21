'use client'
import router from "next/router";
import { Container } from "../../../components/Container"
import { ProductDetail } from "../../../components/ProductDetail"
import { usePathname } from 'next/navigation';
import { useLocalStorage } from "react-use";
import { useAddProductVariantToCartMutation } from "../../../../saleor/api";


export default function Details({ params }: { params: { id: string } }) {
    const paramsOrigin = decodeURIComponent(params.id.replace("%3D", "="));
    const [token] = useLocalStorage('token');
    const [productCart, setProductCart] = useLocalStorage('cart');
    const [addProductToCart] = useAddProductVariantToCartMutation();

    const onAddToCart = async () => {
        await addProductToCart({
            variables: { checkoutToken: token, variantId: paramsOrigin },
        });
        setProductCart(paramsOrigin)
        router.push("/cart");
    };

    return (
        <Container>
            <ProductDetail id={paramsOrigin} onAddToCart={onAddToCart} />
        </Container>
    )
}

// function addProductToCart(arg0: { variables: { checkoutToken: any; variantId: any; }; }) {
//     throw new Error("Function not implemented.");
// }
