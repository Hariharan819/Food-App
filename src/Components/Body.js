import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Swiggy_data } from "../utilis/constant";
const Body = () => {
  const [LiofRestaurant, setLiofRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.4614624&lng=78.1854772&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ",
      {
        headers: {
          "x-cors-api-key": "temp_d989950644d6b585bfbe5e20a1c5f0fa",
        },
      }
    );
    // const data = await fetch(Swiggy_data);
    const json = await data.json();

    setLiofRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json)
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.id);   //418276
  };

  return LiofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <div className="search-btn">
          <input
            type="text"
            className="input-search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              FilteredList = LiofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(FilteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = FilteredRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-card">
        {FilteredRestaurant.map((restaurants) => (
          <RestaurantCards key={restaurants?.info?.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
