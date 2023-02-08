const LastestProduct = `
{
  products(first: 10) {
    edges{
      node{
        id
        name
        description
        thumbnail {url}  
      }
    }
  }
}
`;

export function ProductList() {
  return <div>Products</div>;
}
