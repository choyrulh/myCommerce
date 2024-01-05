import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Cart() {
  const itemCount = 3;
  return (
    <span className="relative">
      <Link to="/cart" className="hidden md:block">
        <HiOutlineShoppingCart className="h-9 w-9" />
      </Link>

      {itemCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-base">
          {itemCount}
        </div>
      )}
    </span>
  );
}

export default Cart;
