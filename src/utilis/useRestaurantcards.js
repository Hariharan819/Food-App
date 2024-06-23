import { useEffect,useState } from "react";

const useRestaurantcards=()=>{
    const[LiofRestaurant,setLiofRestaurant]=useState([]);
    const[FilteredRestaurant,setFilteredRestaurant]=useState([]);
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
return LiofRestaurant,FilteredRestaurant;   
}
export default useRestaurantcards;


