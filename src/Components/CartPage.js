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
        className="p-2 rounded-md bg-slate-500 my-2 text-white"
        onClick={clrcartfun}
      >
        Clear-Cart
      </button>

      <div className="mx-10 my-5 w-5/12 items-center">
        <RestaurantmenuitemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cartpage;
