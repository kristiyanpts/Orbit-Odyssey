import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="relative h-24 w-full bg-header text-textSecondary flex justify-between items-center px-8 box-border">
      <Link to="/">
        <img src={logo} alt="" className="h-20" />
      </Link>
      <nav className="flex gap-4 text-lg items-center">
        <div className="table-cell relative p-15">
          <a
            href=""
            className="transition-all hover:text-hoverPrimary hover-underline"
          >
            top offers
          </a>
        </div>
        <div className="table-cell relative p-15">
          <Link
            to="/store"
            className="transition-all hover:text-hoverPrimary hover-underline"
          >
            store
          </Link>
        </div>
        <div className="table-cell relative p-15">
          <Link
            to="/login"
            className="transition-all hover:text-hoverPrimary hover-underline"
          >
            login
          </Link>
        </div>
        <div className="table-cell relative p-15">
          <Link
            to="/register"
            className="transition-all hover:text-hoverPrimary hover-underline"
          >
            register
          </Link>
        </div>

        <div className="w-30 h-12">
          <input
            type="text"
            name="search"
            id="search"
            className="w-30 h-12 rounded-3xl px-5 box-border text-black outline-blue-500 border-none transition-all pr-10"
            placeholder="Search..."
          />
          <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 right-12 text-black"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
