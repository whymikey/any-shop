import { useEffect, useState } from "react";
import { getData } from "../data/data";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getData();
      setProducts(data);
      setLoading(false);
    }
    load();
  }, []);
  return { products, loading };
}
