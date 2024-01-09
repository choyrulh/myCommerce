import { useParams } from "react-router-dom";
import { getProductById } from "../Service/api";
import { useEffect, useState } from "react";

function DetailCard() {
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const params = useParams();

  useEffect(() => {
    // Async function to fetch movie details from the API
    const fetchProductsDetail = async () => {
      try {
        setIsFetching(true);
        const data = await getProductById(params.id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      } finally {
        setIsFetching(false);
      }
    };

    // Call the fetchMovieDetail function
    fetchProductsDetail();
  }, [params.id]);
  console.log(product);
  return <div>{isFetching ? <p>Loading...</p> : <p>{product.title}</p>}</div>;
}

export default DetailCard;
