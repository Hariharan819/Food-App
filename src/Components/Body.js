import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [LiofRestaurant, setLiofRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2507377&lng=78.1655097&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setLiofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

if (LiofRestaurant.length===0){
  return <Shimmer/>
}

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = LiofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setLiofRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-card">
        {LiofRestaurant.map((restaurants) => (
          <RestaurantCards key={restaurants?.info?.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
