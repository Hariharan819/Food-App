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
          "x-cors-api-key": "temp_8eb6cfbe5c51105a1e5407cdff3024e5",
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
