import RestaurantmenuitemList from "./RestaurantmenuitemList";
import { useState } from "react";
const Restaurantcategory = ({ categoryData }) => {
  // console.log(categoryData);
  const [showitem, setshowitem] = useState(false);
  const clickfunc = () => {
    setshowitem(!showitem);
  };
  return (
    <div className="m-2 p-2 bg-gray-50 shadow-lg  rounded-md w-6/12 capitalize ">
      <div className="flex justify-between  cursor-pointer" onClick={clickfunc}>
        <span className="text-lg font-serif text-red-600">
          {categoryData.title}({categoryData.title.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="">
        {showitem && <RestaurantmenuitemList items={categoryData.itemCards} />}
      </div>
    </div>
  );
};
export default Restaurantcategory;
