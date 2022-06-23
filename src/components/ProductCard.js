import { memo } from "react";
import AddToCart from "./AddToCart";

function ProductCard({ product, cart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt={product.title} src={product.image} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <div className="product-buy">
          <div className="product-price">${product.price}</div>
          <AddToCart product={product} cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
