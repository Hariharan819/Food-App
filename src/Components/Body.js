import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { Swiggy_data } from "../utilis/constant";
import { Link } from "react-router-dom";
import useonlinestatus from "../utilis/useonlinestatus";

const Body = () => {
  const [LiofRestaurant, setLiofRestaurant] = useState(null);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  // const highercompo = higherordercomponent(RestaurantCards); //higher order function
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.4614624&lng=78.1854772&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_5187d74575b1312666e7506b063e50e9",
        },
      }
    );


  //  fetch('https://proxy.cors.sh/https://acme.com', {
  // headers: {
  //   'x-cors-api-key': 'temp_5187d74575b1312666e7506b063e50e9'
  //   }
  // })
  const json = await data.json();

    setLiofRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  const onlinestatus = useonlinestatus();
  if (onlinestatus == false)
    return (
      <h1 className="font-mono text-2xl text-fuchsia-600">
        Please check your internet connection❗❗❗
      </h1>
    );
  return LiofRestaurant === null ? (
    <Shimmer />
  ) : (
    <div className="body m-2">
      <div className=" flex m-1 p-2 justify-center">
        <div className=" ">
          <input
            type="text"
            className="border border-solid border-rose-600 rounded-sm h-8 outline-none focus:border-lime-500"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="mx-6 my-1 px-4 py-1 bg-yellow-200 rounded-md items-center shadow-sm hover:text-red-700"
            onClick={() => {
              FilteredList = LiofRestaurant?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(FilteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="bg-pink-300 rounded-sm mx-28 my-1 px-4 py-1 shadow-md"
          onClick={() => {
            const filteredData = FilteredRestaurant?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap mx-[130px]">
        {FilteredRestaurant?.map((restaurants) => (
          // <RestaurantCards key={restaurants?.info?.id} resData={restaurants} />
          <Link
            key={restaurants?.info?.id}
            style={{ textDecoration: "none" }}
            to={"/restaurants/" + restaurants?.info?.id}
          >
            {" "}
            <RestaurantCards resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
