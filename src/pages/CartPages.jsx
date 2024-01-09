import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../store/cart/cartSlice";
import { Link } from "react-router-dom";

const CartPages = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const handleAddQuantity = (id) => {
    dispatch(cartActions.addQuantityItem(id));
  };

  console.log(cart);
  return (
    <section className="p-4 min-h-screen">
      {!cart.items.length ? (
        <>
          <h1 className="dark:text-white text-2xl flex justify-center items-center mb-2">
            Your Cart is empty
          </h1>

          <Link to="/product" className="flex flex-col items-center mt-1">
            <button className="bg-[#f5f5f5] dark:bg-[#333333] dark:text-white rounded px-2 py-1 hover:outline-2 hover:outline hover:outline-[#444444] dark:hover:outline-white transition-all ease-in-out duration-1000">
              Continue Shopping
            </button>
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h2>
          {cart.items.map((item) => (
            <motion.div
              className="flex items-center p-2 mb-2 justify-between bg-gray-100 dark:bg-[#333333] dark:text-white rounded"
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mr-auto">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />

                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>

              <p className="text-lg font-semibold justify-self-center ml-auto mr-auto">
                $ {item.totalPrice.toLocaleString("id-ID")}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="dark:text-white rounded px-2 py-1 hover:outline-2 hover:outline hover:outline-[#444444] dark:hover:outline-white transition-all ease-in-out duration-1000"
                >
                  -
                </button>
                <p className="text-lg font-semibold">{item.quantity}</p>
                <button
                  onClick={() => handleAddQuantity(item.id)}
                  className="dark:text-white rounded px-2 py-1 hover:outline-2 hover:outline hover:outline-[#444444] dark:hover:outline-white transition-all ease-in-out duration-1000"
                >
                  +
                </button>
              </div>
            </motion.div>
          ))}
          <div className="mt-4 dark:text-white flex items-center p-2 mb-2 justify-between bg-white dark:bg-[#555555] rounded">
            <h2 className="text-xl font-bold mr-auto">Total</h2>
            <h2 className="text-xl font-bold ml-auto mr-auto">
              ${" "}
              {cart.items
                .reduce((total, item) => total + item.totalPrice, 0)

                .toLocaleString("id-ID")}
            </h2>
            <h2 className="text-xl font-bold ml-auto">{cart.totalQuantity}</h2>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPages;
