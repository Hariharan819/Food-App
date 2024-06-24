import useRestaurantmenu from "../utilis/useRestaurant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId); //custom Hook
  if (resinfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div className="m-2 flex flex-col items-center">
      <h2 className="text-2xl text-red-700 my-3">{name}</h2>
      <p className="text-xl  text-green-600">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2 className="text-lg text-blue-600 font-sans my-2 ">Menu</h2>
      <ul className="border border-solid border-purple-800 w-96 flex flex-col justify-evenly my-2 font-serif">
        {itemCards.map((item) => (
          <li
            className="text-amber-900 flex flex-col justify-evenly p-1 mx-2 text-wrap "
            key={item.card.info.id}
          >
            {item.card.info.name} -Rs:{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurantmenu;
