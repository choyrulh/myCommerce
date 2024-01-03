import { motion } from "framer-motion";
import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center border p-2 rounded-md"
    >
      <HiOutlineMagnifyingGlass className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent"
      />
    </motion.div>
  );
};

export default SearchBar;
