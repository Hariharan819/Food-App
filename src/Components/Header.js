import { LOGO_URL } from "../utilis/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useonlinestatus from "../utilis/useonlinestatus";
const Header = () => {
  const onlinestatus = useonlinestatus();
  const storevalue = useSelector((store) => store.cart.items);
  return (
    <div className="flex  bg-orange-100 items-center rounded-md m-2 shadow-md  justify-between">
      <div className="w-28 rounded-md">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex">
          {onlinestatus ? null : (
            <li className="px-3 text-lg">Online Status: 🛑</li>
          )}
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
          <li className="px-4 text-lg  hover:text-pink-800">
            <Link to="/cartpage" className="px-4 text-lg  hover:text-pink-900">
              Cart - {storevalue?.length}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
