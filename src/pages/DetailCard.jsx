import { useParams } from "react-router-dom";
import { getProductById } from "../Service/api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cart/cartSlice";

function DetailCard() {
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // You can add your actual "Add to Cart" logic here
    dispatch(
      cartActions.addNewItems({
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images[0],
      })
    );
    // For example, make an API call or update the cart state
  };

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
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f5f5f5] dark:bg-[#111111] rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={product.thumbnail} // Replace with the actual image source
            alt={product.title}
            className="w-full h-64 object-contain"
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-2 dark:text-[#CCCCCC]">
              {product.title}
            </h2>
            <p className="text-gray-700 mb-4 dark:text-[#CCCCCC]">
              {product.brand}
            </p>
            <p className="text-gray-600 mb-4 dark:text-[#CCCCCC]">
              {product.description}
            </p>
            <p className="text-gray-600 mb-4 dark:text-[#CCCCCC]">
              Rating {product.rating}
            </p>
            <p className="text-gray-600 mb-4 dark:text-[#CCCCCC]">
              Stock {product.stock}
            </p>
            <p className="text-gray-600 mb-4 dark:text-[#CCCCCC]">
              Category {product.category}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-purple-500 font-bold text-lg">
                ${product.price}
              </p>

              <button
                onClick={handleAddToCart}
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DetailCard;
