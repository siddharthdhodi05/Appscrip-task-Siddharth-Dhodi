"use client";

import { useState } from "react";
import ProductToolbar from "./ProductToolbar";
import ProductContent from "./ProductContent";
import { Product } from "@/lib/types";

interface ProductsClientProps {
  products: Product[];
}

const ProductsClient = ({ products }: ProductsClientProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");
  return (
    <div>
      <ProductToolbar
        sortOption={sortOption}
        setSortOption={setSortOption}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <ProductContent
        sortOption={sortOption}
        isSidebarOpen={isSidebarOpen}
        products={products}
      />
    </div>
  );
};

export default ProductsClient;
