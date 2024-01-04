import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiAdjustmentsVertical } from "react-icons/hi2";

function Categories() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="px-3 relative inline-block text-left mt-3">
      <span
        className="cursor-pointer bg-white w-60 justify-between flex flex-row gap-1 rounded-full items-center"
        onClick={toggleDropdown}
      >
        <p className="text-lg mr-auto ml-2">Category</p>
        <motion.span whileTap={{ rotate: isOpen ? 180 : 0 }}>
          <HiAdjustmentsVertical className="h-5 w-5 ml-auto mr-2" />
        </motion.span>
      </span>

      {isOpen && (
        <motion.div
          className="z-10 origin-top-right absolute left-3 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="py-1 ">
            {/* Add your filter options here */}
            <motion.button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
              Category 1
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
              Category 2
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
              Category 3
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
              Category 4
            </motion.button>
            {/* Add more options as needed */}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Categories;
