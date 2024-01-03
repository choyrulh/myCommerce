import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiMiniArrowSmallDown,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog8Tooth,
  HiOutlineUser,
  HiUserCircle,
} from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";

const UserProfil = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const arrowVariants = {
    initial: { rotate: 0, y: 0 },
    rotated: { rotate: 180, y: 0.5 },
  };

  return (
    <div className="relative mr-3">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <HiUserCircle className="h-8 w-8" />
        <span className="text-sm font-semibold">John Doe</span>
        <motion.span
          variants={arrowVariants}
          initial="initial"
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="inline-block"
        >
          <HiMiniArrowSmallDown className="h-4 w-4" />
        </motion.span>
      </motion.div>

      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-2 bg-white dark:bg-slate-950 dark:text-white rounded shadow-md text-gray-800"
        >
          {/* Dropdown content goes here */}
          <ul className=" py-2 px-3">
            <li className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-black dark:hover:text-white">
              <HiOutlineUser className="text-xl" />
              Profile
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-black dark:hover:text-white">
              <HiOutlineCog8Tooth className="text-xl" />
              Settings
            </li>
            <li className="flex items-center gap-2  hover:bg-gray-200 cursor-pointer dark:hover:bg-black dark:hover:text-white">
              <HiOutlineArrowRightOnRectangle className="text-xl" />
              Logout
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfil;
