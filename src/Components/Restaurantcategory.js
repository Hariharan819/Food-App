import RestaurantmenuitemList from "./RestaurantmenuItemList";
const Restaurantcategory = ({ categoryData }) => {
  // console.log(categoryData);
  return (
    <div className="m-2 p-2 bg-gray-50 shadow-lg  rounded-md w-6/12 capitalize">
      <div className="flex justify-between ">
        <span className="text-lg font-serif">{categoryData.title}</span>
        <span>⬇️</span>
      </div>
      <div>
        <RestaurantmenuitemList items={categoryData.itemCards} />
      </div>
    </div>
  );
};
export default Restaurantcategory;
