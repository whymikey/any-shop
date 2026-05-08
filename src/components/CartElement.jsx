import { useCart } from "../CartContext";

function CartElement({ product }) {
  const { removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <img
        src={product.images}
        alt={product.title}
        className="cart-item__img"
      />

      <div className="cart-item__info">
        <h4 className="cart-item__name">{product.title}</h4>
        <p className="cart-item__price">{product.price}</p>
      </div>

      <div className="cart-item__qty">x{product.quantity}</div>
      <button className="cart-item__remove" onClick={() => removeFromCart(product.id)}>✕</button>
    </div>
  );
}

export default CartElement;
