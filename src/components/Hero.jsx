import { Link } from "react-router-dom";
import headphone from "../assets/Headphone.png";
import laptop from "../assets/MacbookM2.png";
import camera from "../assets/camera.png";
import iphone from "../assets/iphone.png";
import android from "../assets/android.png";
import clothes from "../assets/baju.png";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="shadow-lg shadow-[#B3B3B3] dark:shadow-[#222222] relative h-80 rounded-md bg-transparent dark:bg-gradient-to-br mt-3 from-gray-800 to-purple-900 overflow-hidden"
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
            src={laptop}
            alt="Macbook"
            className=" w-80 h-w-80 object-scale-down rotate-[10deg]"
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
      <div className="hidden dark:block absolute inset-0 bg-gray-400 dark:bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Special Offer!
          </h1>
          <p className="text-lg mb-8 text-white">
            Discover our amazing product.
          </p>
          <Link
            to={"/product"}
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-200 text-white px-6 py-3 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
