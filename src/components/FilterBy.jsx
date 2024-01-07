import { HiAdjustmentsVertical } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";

function FilterBy({ filterName, list }) {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [outsideRef]);
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
        className="cursor-pointer bg-[#f5f5f5] dark:bg-[#333333] hover:bg-[#CCCCCC] dark:hover:bg-[#555555] transition-all ease-in-out duration-200 w-28 md:w-36 lg:w-60 justify-between flex flex-row gap-1 rounded-full items-center px-auto shadow-md shadow-[#B3B3B3] dark:shadow-[#222222] "
        onClick={toggleDropdown}
      >
        <p className="dark:text-white text-lg mr-auto ml-2">{filterName}</p>
        <motion.span whileTap={{ rotate: isOpen ? 180 : 0 }}>
          <HiAdjustmentsVertical className="dark:text-white h-5 w-5 ml-auto mr-2" />
        </motion.span>
      </span>

      {isOpen && (
        <motion.div
          ref={outsideRef}
          className="z-10 origin-top-right absolute left-3 mt-2 w-60 rounded-md shadow-lg bg-[#f5f5f5] dark:bg-[#333333] ring-1 ring-black ring-opacity-5 focus:outline-none"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {/* Add your filter options here */}
          <div className="py-1 dark:text-white">
            {list.map((list) => (
              <motion.button
                key={list.id}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-[#CCCCCC] dark:hover:bg-[#555555]"
              >
                {list.title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

FilterBy.propTypes = {
  filterName: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FilterBy;
