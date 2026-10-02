import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
  isSidebarOpen: boolean;
  sortOption: string;
}

const ProductGrid = ({
  products,
  isSidebarOpen,
  sortOption,
}: ProductGridProps) => {
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "Price: high to low":
        return b.price - a.price;

      case "Price: low to high":
        return a.price - b.price;

      case "Popular":
        return b.rating.count - a.rating.count;

      default:
        return 0;
    }
  });

  return (
    <section
      className={`${styles.productGrid} ${
        isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
