import { addItem } from "../ReduxUtilis/cartSlice";
import { CARD_URL } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxUtilis/cartSlice";
const RestaurantmenuitemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const cartfunction = (item) => {
    //function called by onclick
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-200 border-t-2  shadow-md rounded-md my-3 mx-1 p-2 h-36"
        >
          <div className=" flex justify-between">
            <div>
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <div>
              <img
                src={CARD_URL + item.card.info.imageId}
                alt="imageId is not found in api data"
                className="w-32 rounded-md h-24"
              />
              <button
                className="rounded-sm font-mono text-yellow-50 bg-zinc-800 w-16 relative -top-24  hover:text-amber-500"
                onClick={() => cartfunction(item)}
              >
                Add+
              </button>
            </div>
          </div>
          <div>
            <p className="text-wrap w-10/12 relative -top-24 ">
              {item.card.info.description}
            </p>
            <p className="text-wrap w-10/12 relative -top-20 ">
              Type : {item.card.info.itemAttribute.vegClassifier}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantmenuitemList;
