'use client'
import { Container } from "../components/Container";
import { ProductList } from "../components/ProductList";
import { CatergoriesList } from "../components/Categorieslist";
import { BrandList } from "../components/BrandList";
import { useContext } from "react";
import { ContextGlobals } from "../context/contextGlobals";
import { Spinner } from "../components/Spinner";


export default function Home() {
    const { loadingCategories } = useContext(ContextGlobals);
    return (
        <Container>
            {loadingCategories && (
                <Spinner />
            )}
            {!loadingCategories && (
                <>
                    <ProductList />
                    <CatergoriesList />
                    <BrandList />
                </>
            )}
        </Container>
    )
}