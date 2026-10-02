import Image from "next/image";
import { Product } from "@/lib/types";
import styles from "./ProductCard.module.css";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={product.image}
          alt={product.title}
          width={300}
          height={399}
        />
      </div>

      <div className={styles.details}>
        <h3>
          {product.title.length > 30
            ? `${product.title.substring(0, 30)}...`
            : product.title}
        </h3>

        <div className={styles.meta}>
          <p>
            <span>Price</span> ${product.price.toFixed(2)}
          </p>

          <p>
            <span>Popularity</span> {product.rating.count}
          </p>
          <Heart className={styles.heart} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
