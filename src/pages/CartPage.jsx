import "./CartPage.css";
import CartElement from "../components/CartElement";
import { useCart } from "../CartContext";

function CartPage({onBack}) {
  const { cart } = useCart();

  return (
    <div className="cart">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="cart__title">Your Cart</h2>

      <div className="cart__items">
        {cart.map((item) => (
          <CartElement key={item.id} product={item} />
        ))}
      </div>

      <div className="cart__summary">
        <p className="cart__total">
          Total: {cart.reduce((sum, product) => sum + product.price, 0)}
        </p>
        <button className="cart__checkout">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
