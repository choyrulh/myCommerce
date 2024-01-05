// import Categories from "../components/Categories";
import FilterBy from "../components/FilterBy";
import { motion } from "framer-motion";

function Filter() {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-row md:flex-row gap-3"
    >
      <FilterBy filterName="Filter" />
      <FilterBy filterName="Categories" />
    </motion.div>
  );
}

export default Filter;
