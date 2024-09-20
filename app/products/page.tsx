// STATIC RENDERING - REVALIDATION NEVER HAPPENS

import styles from "./page.module.css";

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
    <div className={styles.productsPage}>
      ProductsPage
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
