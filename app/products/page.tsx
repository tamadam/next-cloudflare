interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
}

const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data: ProductsResponse = await res.json();
  const products: Product[] = data.products;
  
  return (
    <div>ProductsPage
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage