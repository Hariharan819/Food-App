import { LOGO_URL } from "../utilis/constant";
const Header = () => {
  return (
    <div className="head">
      <div className="img-container">
        <img className="logo" src={LOGO_URL} />
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
export default Header;
