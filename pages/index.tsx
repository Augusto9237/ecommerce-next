import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProductList />
      </Container>
    </>
  );
}
