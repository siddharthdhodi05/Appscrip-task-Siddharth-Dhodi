"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./productToolbar.module.css";
import { Dispatch, SetStateAction, useState } from "react";

interface ProductToolbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
const ProductToolbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: ProductToolbarProps) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  // const [sortOption, setSortOption] = useState("Recommended");

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span>3245 ITEMS</span>

        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className={styles.button}
        >
          {isSidebarOpen ? (
            <>
              <ChevronLeft />
              Hide Sidebar
            </>
          ) : (
            <>
              <ChevronRight />
              Open Sidebar
            </>
          )}
        </button>
      </div>

      <button className={styles.mobileFilter}>Filter</button>

      <div className={styles.sort}>
        <button onClick={() => setIsSortOpen((prev) => !prev)}>
          Recommended
        </button>

        {isSortOpen && (
          <div className={styles.dropdown}>
            <button>Recommended</button>
            <button>Newest First</button>
            <button>Popular</button>
            <button>Price: high to low</button>
            <button>Price: low to high</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductToolbar;
