import "./ProductList.css";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function ProductList({ onBack }) {
  const { products, loading } = useProducts();

  return (
    <div className="product__container">
      <h1>Products</h1>

      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
