import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    setFetchedData,
    isFetching,
    fetchedData,
    error,
  };
}

export function useFetchProductByCategory(category) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProductsByCategory = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError({ message: error.message || "Failed to fetch products." });
    }
    setIsFetching(false);
  };
  useEffect(() => {
    fetchProductsByCategory();
  }, [category]);

  return {
    setProducts,
    products,
    error,
    isFetching,
  };
}
