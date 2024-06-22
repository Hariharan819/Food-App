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
            <Link to="/" className="linkstyle">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="linkstyle">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="linkstyle">
              {" "}
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
