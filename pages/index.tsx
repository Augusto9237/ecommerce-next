import Head from 'next/head';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';

export default function Home() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
