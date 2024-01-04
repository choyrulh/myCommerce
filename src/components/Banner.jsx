import { Link } from "react-router-dom";
import headphone from "../assets/headphone.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-80 rounded-md bg-gradient-to-br mt-3 from-gray-800 to-purple-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.img
          src={headphone}
          alt="Product"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }} // Add this line for hover animation
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Special Offer!</h1>
          <p className="text-lg mb-8">Discover our amazing product.</p>
          <Link
            to={"/product"}
            className="bg-yellow-500 text-white px-6 py-3 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
