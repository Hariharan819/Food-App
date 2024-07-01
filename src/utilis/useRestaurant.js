import { useState } from "react";
import { useEffect } from "react";

const useRestaurantmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchmenuApi();
  }, []);
  const fetchmenuApi = async () => {
    const api_data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.4614624&lng=78.1854772&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
      {
        headers: {
          "x-cors-api-key": "temp_2e3422c183d29d444b047f686158cd47",
        },
      }
    );
    const jsondata = await api_data.json();
    setresinfo(jsondata.data);
    // console.log(jsondata);
  };
  return resinfo;
};
export default useRestaurantmenu;

