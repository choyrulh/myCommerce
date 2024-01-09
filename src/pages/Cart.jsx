import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../store/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  console.log(cart);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.items.map((item) => (
        <motion.div
          className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded"
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={item.images}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-black ">Quantity: {item.quantitiy}</p>
          </div>
          <p className="text-lg font-semibold">${item.totalPrice.toFixed(2)}</p>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="bg-red-500 text-white rounded px-2 py-1"
          >
            Delete
          </button>
        </motion.div>
      ))}
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          Total Quantity: {cart.totalQuantity}
        </h2>
        <h2 className="text-xl font-bold">
          Total Price: $
          {cart.items
            .reduce((total, item) => total + item.totalPrice, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
