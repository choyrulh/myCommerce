import { motion } from "framer-motion";
import { useState } from "react";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      navigate(`/products/q=${value}`);
    } else {
      navigate("/");
    }
  };

  return (
    <span className="hidden sm:hidden md:block">
      <motion.form
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center border p-2 rounded-md "
      >
        <HiOutlineMagnifyingGlass className="h-5 w-5 text-gray-500 mr-2" />
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent"
        />
      </motion.form>
    </span>
  );
};

export default SearchBar;
