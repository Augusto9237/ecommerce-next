'use client'
import { Container } from "../../../components/Container"
import { ProductDetail } from "../../../components/ProductDetail"
import { usePathname } from 'next/navigation';


export default function Details({ params }: { params: { id: string } }) {
    const paramsOrigin = decodeURIComponent(params.id.replace("%3D", "="));

    return (
        <Container>
            <ProductDetail id={paramsOrigin}/>
        </Container>
    )
}