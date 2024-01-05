import { HiAdjustmentsVertical } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";

function FilterBy() {
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
        className="cursor-pointer bg-[#CCCCCC] dark:bg-[#333333] hover:bg-[#f5f5f5] dark:hover:bg-[#555555] transition-all ease-in-out duration-200 w-28 md:w-36 lg:w-60 justify-between flex flex-row gap-1 rounded-full items-center px-auto shadow-md shadow-[#B3B3B3] dark:shadow-[#222222] "
        onClick={toggleDropdown}
      >
        <p className="dark:text-white text-lg mr-auto ml-2">Filter</p>
        <motion.span whileTap={{ rotate: isOpen ? 180 : 0 }}>
          <HiAdjustmentsVertical className="dark:text-white h-5 w-5 ml-auto mr-2" />
        </motion.span>
      </span>

      {isOpen && (
        <motion.div
          className="z-10 origin-top-right absolute left-3 mt-2 w-60 rounded-md shadow-lg bg-[#CCCCCC] dark:bg-[#333333] ring-1 ring-black ring-opacity-5 focus:outline-none"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="py-1 dark:text-white">
            {/* Add your filter options here */}
            <motion.button className="block w-full px-4 py-2 text-left text-sm hover:bg-[#f5f5f5] dark:hover:bg-[#555555]">
              Option 1
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm hover:bg-[#f5f5f5] dark:hover:bg-[#555555]">
              Option 2
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm hover:bg-[#f5f5f5] dark:hover:bg-[#555555]">
              Option 3
            </motion.button>
            <motion.button className="block w-full px-4 py-2 text-left text-sm hover:bg-[#f5f5f5] dark:hover:bg-[#555555]">
              Option 4
            </motion.button>
            {/* Add more options as needed */}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default FilterBy;
