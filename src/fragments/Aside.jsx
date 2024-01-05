import DarkModeToggle from "./../components/header/DarkModeToggle";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMiniArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };
  const arrowVariants = {
    initial: { rotate: 0, y: 0 },
    rotated: { rotate: 180, y: 0.5 },
  };
  return (
    <>
      <aside className="fixed w-1/12 h-screen hidden md:block transition-all duration-300">
        <div className="p-4">
          <button
            onClick={toggleDropdown}
            className="dark:text-white  w-full flex flex-row  items-center"
          >
            <p className="mr-auto">User</p>
            <motion.span
              variants={arrowVariants}
              initial="initial"
              animate={isOpen ? "rotated" : "initial"}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="inline-block"
            >
              <HiMiniArrowDown className="ml-auto h-4 w-4" />
            </motion.span>
          </button>
          <hr className="border-gray-300 my-2" />
          {isOpen && (
            <motion.ul
              className="dark:text-white"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              <li>My Profile</li>
              <li>Account</li>
              <li>Logout</li>
              <hr className="border-gray-300 my-2" />
            </motion.ul>
          )}

          <Link to="/settings" className="dark:text-white">
            Settings
          </Link>
          <hr className="border-gray-300 my-2" />
          <Link
            to="/wishlist"
            className="dark:text-white w-full flex flex-row  items-center"
          >
            <p className="mr-auto">Wishlist</p>
            <p className="text-gray-400 ml-auto">(0)</p>
          </Link>
          <hr className="border-gray-300 my-2" />
          <DarkModeToggle />
          <hr className="border-gray-300 my-2" />
        </div>
      </aside>
    </>
  );
}

export default Aside;
