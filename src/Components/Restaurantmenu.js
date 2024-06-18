import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { Menu_Api } from "../utilis/constant";

const Restaurantmenu = () => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchmenuApi();
  }, []);
  const fetchmenuApi = async () => {
    const api_data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.4614624&lng=78.1854772&restaurantId=792187&catalog_qa=undefined&submitAction=ENTER ",
      {
        headers: {
          "x-cors-api-key": "temp_d989950644d6b585bfbe5e20a1c5f0fa",
        },
      }
    );
    // const api_data = await fetch(Menu_Api);
    const jsondata = await api_data.json();
    setresinfo(jsondata.data);
    console.log(jsondata);
  };
  if (resinfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;
  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
export default Restaurantmenu;
