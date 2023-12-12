import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 p-4">
      <div className="font-black text-white text-lg">
        <Link to={"/"}>LISTING-POST APP</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/listpost" className="text-white hover:underline">
          Listing Post
        </Link>
        <Link to="/addpost" className="text-white hover:underline">
          Add Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
