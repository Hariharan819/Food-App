import useRestaurantmenu from "../utilis/useRestaurant";
import Restaurantcategory from "./Restaurantcategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId); //custom Hook
  if (resinfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const category =
    resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(category);
  return (
    <div className="m-2 flex flex-col items-center">
      <h2 className="text-2xl text-red-700 my-3">{name}</h2>
      <p className="text-xl  text-green-600">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {category.map((categories) => (
        <Restaurantcategory
          key={categories?.card?.card?.title}
          categoryData={categories?.card?.card}
        />
      ))}
    </div>
  );
};
export default Restaurantmenu;
