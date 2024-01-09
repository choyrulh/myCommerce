import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <span className="relative">
      <Link to="/cart" className="hidden md:block">
        <HiOutlineShoppingCart className="h-9 w-9" />

        {cart.totalQuantity > 0 && (
          <div className=" hidden absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 md:flex items-center justify-center text-base ">
            {cart.totalQuantity}
          </div>
        )}
      </Link>
    </span>
  );
}

export default Cart;
