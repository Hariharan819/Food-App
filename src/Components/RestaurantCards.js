import { CARD_URL } from "../utilis/constant";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div
      className="w-[290px] mx-[7px] my-2 p-2 bg-yellow-100 rounded-sm h-[400px]
     shadow-md hover:shadow-lg  flex flex-col justify-evenly text-wrap capitalize text-indigo-900"
    >
      <img
        className="rounded-md h-44 w-96 hover:shadow-lg"
        src={CARD_URL + cloudinaryImageId}
        alt="network issuse"
      />
      <h4 className="text-red-600">{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4> Rating :{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time :{sla?.slaString}</h4>
    </div>
  );
};

//higher order component it takes component as input and return an component which is enhanced
export const higherordercomponent = () =>
  // here the input component passed ex:RestaurantCard
  {
    //it also return component
    return () =>
      //props received for component
      {
        //this component it return some piece of jsx
        return (
          <div>
            <p>hai</p>
            <RestaurantCards
            //{...props}
            />
          </div>
        );
      };
  };
export default RestaurantCards;
