'use client'
import { Container } from "../../../components/Container"
import { ProductDetail } from "../../../components/ProductDetail"
import { useRouter } from 'next/navigation';
import { useLocalStorage } from "react-use";
import { useAddProductVariantToCartMutation } from "../../../../saleor/api";


export default function Details({ params }: { params: { id: string } }) {
    const paramsOrigin = decodeURIComponent(params.id.replace("%3D", "="));
    const router = useRouter();
    const [token] = useLocalStorage('token');
    const [productCart, setProductCart] = useLocalStorage('cart');
    const [addProductToCart] = useAddProductVariantToCartMutation();

    const onAddToCart = async () => {
        await addProductToCart({
            variables: { checkoutToken: token, variantId: paramsOrigin },
        });
        setProductCart(paramsOrigin)
    };

    return (
        <Container>
            <ProductDetail id={paramsOrigin} onAddToCart={onAddToCart} />
        </Container>
    )
}

