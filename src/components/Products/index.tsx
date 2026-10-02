import { getProducts } from "@/lib/product";
import ProductsClient from "./ProductsClient";

export const dynamic = "force-dynamic";

const Products = async () => {
  const products = await getProducts();

  return <ProductsClient products={products} />;
};

export default Products;
