'use client'
import { Container } from "../components/Container";
import { ProductList } from "../components/ProductList";
import { CatergoriesList } from "../components/Categorieslist";
import { BrandList } from "../components/BrandList";


export default function Home() {

    return (
        <Container>
            <ProductList />
            <CatergoriesList/>
            <BrandList/>
        </Container>
    )
}