import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByQuery } from "../Service/api";

function SearchPages() {
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  query = useParams();

  useEffect(() => {
    // Async function to fetch movie details from the API
    const fetchProductsDetail = async () => {
      try {
        setIsFetching(true);
        const data = await getProductByQuery(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching search movie..:", error);
      } finally {
        setIsFetching(false);
      }
    };

    // Call the fetchMovieDetail function
    fetchProductsDetail();
  }, [query]);
  console.log(isFetching);
  console.log(product);
  return <div>SearchPages</div>;
}

export default SearchPages;
