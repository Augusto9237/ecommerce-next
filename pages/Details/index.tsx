import { BottomBar } from '../../components/BottomBar';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { ProductDetail } from '../../components/ProductDetail';

export default function Details() {
  return (
    <>
      <Header />
      <Container>
        <ProductDetail/>
      </Container>
      <BottomBar/>
    </>
  );
}
