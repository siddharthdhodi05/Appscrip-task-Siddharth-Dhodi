import { getProducts } from "@/lib/product";
import ProductsClient from "./ProductsClient";

const Products = async () => {
  const products = await getProducts();

  return <ProductsClient products={products} />;
};

export default Products;
