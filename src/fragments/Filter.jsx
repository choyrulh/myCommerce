// import Categories from "../components/Categories";
import FilterBy from "../components/FilterBy";
import { motion } from "framer-motion";

function Filter() {
  const categories = [
    {
      id: 1,
      name: "smartphones",
      title: "Smartphones",
    },
    {
      id: 2,
      name: "laptops",
      title: "Laptops",
    },
    {
      id: 3,
      name: "fragrances",
      title: "Fragrances",
    },
    {
      id: 4,
      name: "skincare",
      title: "Skincare",
    },
    {
      id: 5,
      name: "groceries",
      title: "Groceries",
    },
    {
      id: 6,
      name: "home-decoration",
      title: "Home Decoration",
    },
    {
      id: 7,
      name: "furniture",
      title: "Furniture",
    },
    {
      id: 8,
      name: "tops",
      title: "Tops",
    },
    {
      id: 9,
      name: "womens",
      title: "Womens",
    },
    {
      id: 10,
      name: "mens",
      title: "Mens",
    },
    {
      id: 11,
      name: "sunglasses",
      title: "Sunglasses",
    },
    {
      id: 12,
      name: "automotive",
      title: "Automotive",
    },
    {
      id: 13,
      name: "motorcycle",
      title: "Motorcycle",
    },
    {
      id: 24,
      name: "lighting",
      title: "Lighting",
    },
  ];

  const filterBy = [
    {
      id: 1,
      name: "price",
      title: "Price",
    },
    {
      id: 2,
      name: "rating",
      title: "Rating",
    },
    {
      id: 3,
      name: "discount",
      title: "Discount",
    },
    {
      id: 4,
      name: "stock",
      title: "Stock",
    },
  ];

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
      <FilterBy filterName="Filter" list={filterBy} />
      <FilterBy filterName="Categories" list={categories} />
    </motion.div>
  );
}

export default Filter;
