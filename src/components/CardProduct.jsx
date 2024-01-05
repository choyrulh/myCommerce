import { motion } from "framer-motion";
import { useState } from "react";

const CardProduct = () => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // You can add your actual "Add to Cart" logic here
    // For example, make an API call or update the cart state
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000); // Simulating an asynchronous action
  };

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-[#E0E0E0] border border-gray-200 rounded-lg shadow-md shadow-[#B3B3B3] dark:shadow-[#333333] dark:bg-gray-800 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        <motion.img
          className="w-full h-48 object-cover rounded-t-lg"
          src="https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="p-2">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Macbook Air
          </h5>
          <div className=" flex flex-row justify-between">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
            </div>
            <motion.button
              className={`${
                isAddingToCart
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white px-1 sm:px-4 py-0 sm:py-2 rounded-full`}
              disabled={isAddingToCart}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
            >
              {isAddingToCart ? "Adding to cart..." : "$100.00"}
            </motion.button>
          </div>
        </div>
      </motion.li>
    </>
  );
};

export default CardProduct;
