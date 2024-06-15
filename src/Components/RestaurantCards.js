import { CARD_URL } from "../utilis/constant";
const RestaurantCards = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = resData?.data;

  return (
    <div className="restaurant-cards" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        src={CARD_URL
           +
          cloudinaryImageId
        }
        alt="network issuse"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100}FOR TWO</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCards;