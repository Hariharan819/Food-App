import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="head">
      <div className="img-container">
        <img
          className="logo"
          src="https://tse1.mm.bing.net/th?id=OIP.ZRB8nfYxIqe_AXkygaFEJQAAAA&pid=Api&P=0&h=180"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards=()=>{
    return(
        <div className="restaurant-cards" style={{backgroundColor:"grey"}}>
            <h4>Aachii</h4>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <div className="res-card">
           <RestaurantCards/>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
