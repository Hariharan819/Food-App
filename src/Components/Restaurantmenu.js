import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { Menu_Api } from "../utilis/constant";

const Restaurantmenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchmenuApi();
  }, []);
  const fetchmenuApi = async () => {
    const api_data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.4614624&lng=78.1854772&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsondata = await api_data.json();
    setresinfo(jsondata.data);
    console.log(jsondata);
  };
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
