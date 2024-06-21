import { CARD_URL } from "../utilis/constant";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="restaurant-cards">
      <img
        className="res-logo"
        src={CARD_URL + cloudinaryImageId}
        alt="network issuse"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time :{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCards;
