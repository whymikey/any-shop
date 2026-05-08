import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import BestSellers from "./components/BestSellers";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import { useTheme } from "./ThemeContext";

function App() {
  const { toggleTheme } = useTheme();
  const [allProducts, setAllProducts] = useState(false);
  const [cartPage, setCartPage] = useState(false);
  const [mainPage, setMainPage] = useState(false);

  return (
    <div className="container">
      <Header
        onTheme={toggleTheme}
        onProducts={setAllProducts}
        onCart={setCartPage}
        onLogo={setMainPage}
      />
      {cartPage ? (
        <CartPage onCart={setCartPage} onBack={() => {
          setAllProducts(false)
          setCartPage(false)
          setMainPage(true)
        }} />
      ) : allProducts ? (
        <ProductList onBack={() => setAllProducts(false)} />
      ) : (
        <BestSellers />
      )}
    </div>
  );
}

export default App;
