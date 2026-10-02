"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./productToolbar.module.css";
import { Dispatch, SetStateAction, useState } from "react";

interface ProductToolbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}
const ProductToolbar = ({
  sortOption,
  isSidebarOpen,
  setIsSidebarOpen,
  setSortOption,
}: ProductToolbarProps) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

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
          {sortOption}
        </button>

        {isSortOpen && (
          <div className={styles.dropdown}>
            <button
              onClick={() => {
                setSortOption("Recommended");
                setIsSortOpen((prev) => !prev);
              }}
            >
              Recommended
            </button>
            <button
              onClick={() => {
                setSortOption("Newest First");
                setIsSortOpen((prev) => !prev);
              }}
            >
              Newest First
            </button>
            <button
              onClick={() => {
                setSortOption("Popular");
                setIsSortOpen((prev) => !prev);
              }}
            >
              Popular
            </button>
            <button
              onClick={() => {
                setSortOption("Price: high to low");
                setIsSortOpen((prev) => !prev);
              }}
            >
              Price: high to low
            </button>
            <button
              onClick={() => {
                setSortOption("Price: low to high");
                setIsSortOpen((prev) => !prev);
              }}
            >
              Price: low to high
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductToolbar;
