import "./BestSellers.css";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function BestSellers() {
  const { products, loading } = useProducts();
  
  return (
    <div className="best__sellers-container">
    <h1>Best Sellers</h1>
    <div className="best__sellers-list">
      {products.slice(0, 8).map(product => (<ProductCard key={product.id} product={product}/>))}
    </div>
    </div>
  );
}
