import { useSelector } from "react-redux";
import RestaurantmenuitemList from "./RestaurantmenuitemList";
const Cartpage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-col items-center">
      <div className="mx-10 my-5 w-5/12 items-center">
        <RestaurantmenuitemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cartpage;
