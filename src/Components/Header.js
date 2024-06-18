import { LOGO_URL } from "../utilis/constant";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="head">
      <div className="img-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About Us</Link>
          </li>
          <li>
          <Link to="/contactus"> Contact Us</Link>

          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
