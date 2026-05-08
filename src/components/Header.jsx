import "./Header.css";
import { useCart } from "../CartContext";

function Header({ onTheme, onProducts, onCart, onLogo }) {
  const { cart } = useCart();

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={(e) => {
          e.preventDefault();
          onLogo(true);
          onCart(false);
          onProducts(false);
        }}
      >
        AnyShop
      </div>

      <nav className="header__nav">
        <a
          href="/"
          className="header__link"
          onClick={(e) => {
            e.preventDefault();
            onCart(false);
            onLogo(false)
            onProducts(true);
          }}
        >
          Products
        </a>
        <a
          href="/cart"
          className="header__cart"
          onClick={(e) => {
            e.preventDefault();
            onProducts(false);
            onLogo(false)
            onCart(true);
          }}
        >
          🛒 <span className="header__cart-count">{cart.length}</span>
        </a>
        <button className="theme-toggle" onClick={onTheme}>
          <svg className="icon icon--sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <g strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </g>
          </svg>

          <svg className="icon icon--moon" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
export default Header;
