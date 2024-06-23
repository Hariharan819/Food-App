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
    <div className="outsidemenu">
      <h2 className="nameofmenu">{name}</h2>
      <p className="priceofmenu">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2 className="insidemenu">Menu</h2>

      <ul className="menu-ul">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs:{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurantmenu;
