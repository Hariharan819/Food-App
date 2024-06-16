import RestaurantCards from "./RestaurantCards";
import resList from "../utilis/mockData";
import { useState } from "react";
const Body = () => {
  const[LiofRestaurant,setLiofRestaurant]=useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = LiofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setLiofRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        <div className="res-card">
          {LiofRestaurant.map((restaurant) => (
            <RestaurantCards key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
