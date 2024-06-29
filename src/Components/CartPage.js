import { useDispatch, useSelector } from "react-redux";
import RestaurantmenuitemList from "./RestaurantmenuitemList";
import { clearItem } from "../ReduxUtilis/cartSlice";
const Cartpage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clrcartfun = () => {
    dispatch(clearItem());
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="p-2 rounded-md bg-green-400 my-2 text-white shadow-md"
        onClick={clrcartfun}
      >
        Clear-Cart
      </button>
      <div>
        {cartItems.length === 0 && (
          <h1 className="px-32 py-2 my-3 bg-orange-300 rounded-md text-white shadow-lg">Cart is empty! Add some Items to the Cart</h1>
        )}
      </div>
      <div className="mx-10 my-5 w-5/12 items-center ">
        <RestaurantmenuitemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cartpage;
