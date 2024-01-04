import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Link to="/cart" className="hidden md:block">
      <HiOutlineShoppingCart className="h-7 w-7" />
    </Link>
  );
}

export default Cart;
