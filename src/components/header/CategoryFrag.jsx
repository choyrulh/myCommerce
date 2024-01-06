import grosir from "../../assets/grosir.svg";
import laptop from "../../assets/laptop.svg";
import clothes from "../../assets/clothes.svg";
import smartphone from "../../assets/smartphone.svg";
import { HiSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
function CategoryFrag() {
  return (
    <>
      <section
        className=" w-full my-5
        h-32 items-center shadow-lg shadow-[#CCCCCC] bg-[#E0E0E0] dark:bg-[#111111] dark:shadow-[#222222]"
      >
        <ul className="h-full flex flex-row items-center gap-2 justify-evenly dark:text-white">
          <Link to="/categories">
            <li className="flex flex-col items-center gap-2 justify-evenly">
              <HiSquares2X2 className="h-9 w-9" />
              <h2>All Categories</h2>
            </li>
          </Link>
          <Link to="./categories/laptop">
            <li className="flex flex-col items-center gap-2 justify-evenly">
              <img src={laptop} alt="laptop" className="w-10 h-10 " />
              <h2>Laptop</h2>
            </li>
          </Link>
          <Link to="./categories/smartphone">
            <li className="flex flex-col items-center gap-2 justify-evenly">
              <img src={smartphone} alt="smartphone" className="w-10 h-10 " />
              <h2>Smartphone</h2>
            </li>
          </Link>
          <Link to="./categories/clothes">
            <li className="flex flex-col items-center gap-2 justify-evenly">
              <img src={clothes} alt="clothes" className="w-10 h-10 " />
              <h2>Fashion</h2>
            </li>
          </Link>
          <Link to="./categories/groceries">
            <li className="flex flex-col items-center gap-2 justify-evenly">
              <img src={grosir} alt="grosir" className="w-10 h-10 " />
              <h2>Groceries</h2>
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
}

export default CategoryFrag;
