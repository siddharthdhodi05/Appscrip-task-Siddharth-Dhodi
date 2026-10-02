import ProductGrid from "./ProductGrid";
import Sidebar from "./Sidebar";
import styles from "./ProductContent.module.css";
import { Product } from "@/lib/types";

interface ProductContentProps {
  sortOption: string;
  isSidebarOpen: boolean;
  products: Product[];
}

const ProductContent = ({
  isSidebarOpen,
  products,
  sortOption,
}: ProductContentProps) => {
  return (
    <div
      className={`${styles.content} ${
        isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      {isSidebarOpen && <Sidebar />}
      <ProductGrid
        products={products}
        sortOption={sortOption}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

export default ProductContent;
