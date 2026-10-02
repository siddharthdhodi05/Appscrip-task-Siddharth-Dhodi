import { fallbackProducts } from "./fallbackProducts";
import { Product } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Product API unavailable, using fallback data:", error);

    return fallbackProducts;
  }
};
