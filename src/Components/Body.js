import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Swiggy_data } from "../utilis/constant";
import { Link } from "react-router-dom";
const Body = () => {
  const [LiofRestaurant, setLiofRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_data);
    const json = await data.json();

    setLiofRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
 
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
          // <RestaurantCards key={restaurants?.info?.id} resData={restaurants} />
            <Link  key={restaurants?.info?.id}  style={{ textDecoration: 'none' }} to={"/restaurants/" + restaurants?.info?.id}> <RestaurantCards resData={restaurants} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;




