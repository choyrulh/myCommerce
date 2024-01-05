import { Link } from "react-router-dom";
import headphone from "../assets/headphone.png";
import macbook from "../assets/macbook.png";
import camera from "../assets/camera.png";
import iphone from "../assets/iphone.png";
import android from "../assets/android.png";
import clothes from "../assets/baju.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-80 rounded-md bg-gradient-to-br mt-3 from-gray-800 to-purple-900 overflow-hidden"
    >
      <ul className="absolute inset-0 flex flex-row items-center">
        <li className="size-48 md:w-1/6 w-full translate-x-4 translate-y-5 rotate-45">
          <img
            src={android}
            alt="Smartphone"
            className="w-80 h-w-80 object-contain -rotate-6"
          />
        </li>
        <li className="md:w-1/6 w-full translate-x-4 translate-y-12">
          <img
            src={headphone}
            alt="Headphone"
            className="w-80 h-w-80 object-contain -rotate-6"
          />
        </li>
        <li className="md:w-1/6 w-full -translate-y-12 mt-7">
          <img
            src={macbook}
            alt="Macbook"
            className="size-48 w-80 h-w-80 object-contain rotate-[10deg]"
          />
        </li>
        <li className="md:w-1/6 w-full size-16 translate-y-16 mt-7 -rotate-[30deg]">
          <img
            src={clothes}
            alt="Clothes"
            className="size-48 w-80 h-w-80 object-contain rotate-[10deg]"
          />
        </li>
        <li className="md:w-1/6 w-full -translate-y-14 translate-x-6 mt-7">
          <img
            src={iphone}
            alt="Iphone"
            className="size-40 w-80 h-w-80 object-contain rotate-[10deg]"
          />
        </li>
        <li className="md:w-1/6 w-full translate-y-16 translate-x-7">
          <img
            src={camera}
            alt="Camera"
            className="w-80 h-w-80 object-contain "
          />
        </li>
      </ul>

      <div className="absolute inset-0 bg-black opacity-50"></div>

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
