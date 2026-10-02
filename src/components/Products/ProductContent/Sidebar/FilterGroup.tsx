"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Sidebar.module.css";

interface FilterGroupProps {
  title: string;
  options: string[];
}

const FilterGroup = ({ title, options }: FilterGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterGroup}>
      <button
        className={styles.filterButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>

        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <span className={styles.all}>All</span>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <label key={option}>
              <input type="checkbox" />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
