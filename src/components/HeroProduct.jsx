import macbook from "../assets/macbook.png";
import camera1 from "../assets/camera1.png";
import Sepatu from "../assets/Sepatu1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const products = [
  {
    id: 1,
    name: "Macbook",
    price: 1000,
    img: macbook,
    category: "macbook",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam",
    colors: ["Silver", "Space Gray", "Gold"],
  },
  {
    id: 2,
    name: "Camera",
    price: 799,
    img: camera1,
    category: "camera",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam quisquam laudantium dicta rerum. Labore",
    colors: ["Black", "White", "Red"],
  },
  {
    id: 3,
    name: "Sepatu",
    price: 349,
    img: Sepatu,
    category: "sepatu",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
    colors: ["Blue", "Green", "Yellow"],
  },
];
function HeroProduct() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const ColorOption = ({ color }) => (
    <span
      className="inline-block w-6 h-6 rounded-full mr-2"
      style={{ backgroundColor: color, border: "2px solid #fff" }}
    />
  );
  ColorOption.propTypes = {
    color: PropTypes.string.isRequired,
  };

  return (
    <section className=" mt-1 shadow-lg dark:shadow-md shadow-[#B3B3B3] dark:shadow-[#222222] container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center relative">
      {products.map(
        (products, index) =>
          index < 1 && (
            <>
              <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                <div className="max-w-lg lg:mx-12 lg:order-2">
                  <motion.h1
                    className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                  >
                    {products.name}
                  </motion.h1>
                  <div className="flex mt-4">
                    {products.colors.map((color, index) => (
                      <ColorOption key={index} color={color} />
                    ))}
                  </div>
                  <motion.p
                    className="mt-4 text-gray-600 dark:text-gray-300"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                  >
                    {products.desc}
                  </motion.p>
                  <div className="mt-6">
                    <Link
                      to={`/products/${products.category}`}
                      className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                    >
                      Go to Product
                    </Link>
                  </div>
                </div>
              </div>

              <motion.img
                className="object-contain  rounded-md lg:w-1/2 scale-x-[-1]"
                src={products.img}
                alt={products.name}
              />
            </>
          )
      )}
    </section>
  );
}

export default HeroProduct;
