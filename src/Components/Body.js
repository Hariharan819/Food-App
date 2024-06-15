import RestaurantCards from "./RestaurantCards";
import resList from "../utilis/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          <div className="res-card">
            {/* <RestaurantCards resData={resList[0]} />
            <RestaurantCards resData={resList[1]} />
            <RestaurantCards resData={resList[2]} />
            <RestaurantCards resData={resList[3]} />
            <RestaurantCards resData={resList[4]} />
            <RestaurantCards resData={resList[5]} /> */}
            {resList.map((restaurant) => (
              <RestaurantCards key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Body;