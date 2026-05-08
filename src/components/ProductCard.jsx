import "./ProductCard.css";
import { useCart } from "../CartContext";

export default function ProductCard({ product }) {
  const { addToCard } = useCart();
  return (
    <div className="product-card">
      <img
        src={product.images}
        alt={product.title}
        className="product-card__img"
      />

      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">{product.price} $</p>

      <button className="product-card__btn" onClick={() => addToCard(product)}>Add to Cart</button>
    </div>
  );
}
