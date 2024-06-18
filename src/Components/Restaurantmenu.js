import { useState, useEffect } from "react";
import { Menu_Api } from "../utilis/constant";

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
    setresinfo(jsondata);
    console.log(jsondata);
  };
  return <div>This is Restautant menu</div>;
};
export default Restaurantmenu;
