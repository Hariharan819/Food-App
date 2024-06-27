import { LOGO_URL } from "../utilis/constant";
import { Link } from "react-router-dom";

import useonlinestatus from "../utilis/useonlinestatus";
const Header = () => {
  const onlinestatus = useonlinestatus();
  return (
    <div className="flex  bg-orange-100 items-center rounded-md m-2 shadow-md  justify-between">
      <div className="w-28 rounded-md">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex">
          <li className="px-3 text-lg">
            Online Status:{onlinestatus ? "⚡" : "🛑"}
          </li>
          <li>
            <Link to="/" className="px-4 text-lg hover:text-pink-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="px-4 text-lg  hover:text-pink-900">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="px-4 text-lg  hover:text-pink-900">
              {" "}
              Contact Us
            </Link>
          </li>
          <li className="px-5 text-lg  hover:text-pink-800">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
