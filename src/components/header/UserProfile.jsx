import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMiniArrowSmallDown,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog8Tooth,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiUserCircle,
} from "react-icons/hi2";

const UserProfile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let outsideRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    let handler = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [outsideRef]);

  const arrowVariants = {
    initial: { rotate: 0, y: 0 },
    rotated: { rotate: 180, y: 0.5 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mr-3"
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <HiUserCircle className="h-8 w-8 text-white dark:text-gray-400" />
        <span className="text-sm font-semibold">Choirul Humam</span>
        <motion.span
          variants={arrowVariants}
          initial="initial"
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="inline-block"
        >
          <HiMiniArrowSmallDown className="h-4 w-4" />
        </motion.span>
      </div>

      {isDropdownOpen && (
        <motion.div
          ref={outsideRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-3 bg-[#CCCCCC] dark:bg-[#222222] dark:text-white rounded shadow-md text-gray-800"
        >
          {/* Dropdown content goes here */}
          <ul className="text-xl md:text-base py-2 px-3 flex flex-col gap-4">
            <li className="flex items-center gap-2 cursor-pointer dark:hover:text-cyan-200">
              <HiOutlineUser className="text-xl" />
              Profile
            </li>
            <li className="flex items-center gap-2 cursor-pointer dark:hover:text-cyan-200">
              <HiOutlineCog8Tooth className="text-xl" />
              Settings
            </li>
            <Link to="/cart">
              <li className="flex items-center gap-2 cursor-pointer dark:hover:text-cyan-200">
                <HiOutlineShoppingCart className="text-xl " />
                My Cart
              </li>
            </Link>
            <li className="flex items-center gap-2  cursor-pointer dark:hover:text-cyan-200">
              <HiOutlineArrowRightOnRectangle className="text-xl" />
              Logout
            </li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserProfile;
