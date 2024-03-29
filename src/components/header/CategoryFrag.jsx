import {
  GiClothes,
  GiShoppingBag,
  GiSmartphone,
  GiSofa,
  GiSunglasses,
  GiWatch,
} from "react-icons/gi";
import { HiSquares2X2 } from "react-icons/hi2";
import { RiMacbookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function CategoryFrag() {
  const handleClickWindow = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section
        className=" w-full my-5
        h-32 items-center shadow-lg shadow-[#CCCCCC] bg-[#E0E0E0] dark:bg-[#111111] dark:shadow-[#222222]"
      >
        <ul className="h-full flex flex-row items-center gap-2 justify-evenly dark:text-[#CCCCCC]">
          <Link to="/categories" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white ">
              <HiSquares2X2 className="h-9 w-9 bg-white dark:bg-[#222222] rounded-full p-1 shadow-inner " />
              <h2>All Categories</h2>
            </li>
          </Link>
          <Link to="./categories/laptops" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <RiMacbookFill className="w-9 h-9 bg-white dark:bg-[#222222] rounded-full p-1 shadow-inner " />
              <h2>Laptop</h2>
            </li>
          </Link>
          <Link to="./categories/smartphones" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiSmartphone className="w-9 h-9 bg-white dark:bg-[#222222] rounded-full p-1 shadow-inner" />
              <h2>Smartphone</h2>
            </li>
          </Link>
          <Link to="./categories/clothes" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiClothes className=" w-9 h-9 bg-white dark:bg-[#222222] rounded-full p-1 shadow-inner" />
              <h2>Fashion</h2>
            </li>
          </Link>
          <Link to="./categories/groceries" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiShoppingBag className="w-9 h-9 bg-white dark:bg-[#222222] rounded-full p-1 shadow-inner" />
              <h2>Groceries</h2>
            </li>
          </Link>
          <Link to="./categories/watch" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiWatch
                className="w-9 h-9 bg-white dark:bg-[#222222] rounded-full p-1
              shadow-inner"
              />
              <h2>Watch</h2>
            </li>
          </Link>
          <Link to="./categories/sunglasses" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiSunglasses
                className="w-9 h-9 bg-white dark:bg-[#222222]
              rounded-full p-1 shadow-inner"
              />
              <h2>Sunglasses</h2>
            </li>
          </Link>
          <Link to="./categories/furniture" onClick={handleClickWindow}>
            <li className="flex flex-col items-center gap-2 justify-evenly hover:text-[#444444] dark:hover:text-white">
              <GiSofa
                className="w-9 h-9 bg-white dark:bg-[#222222]
              rounded-full p-1 shadow-inner"
              />
              <h2>Furniture</h2>
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
}

export default CategoryFrag;
