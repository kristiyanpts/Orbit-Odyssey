import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const { pathname } = useLocation();
  if (pathname.includes("login") || pathname.includes("register")) return;

  return (
    <div className="relative h-24 w-full bg-header text-textSecondary flex justify-between items-center px-8 box-border">
      <NavLink to="/">
        <img src={logo} alt="" className="h-20" />
      </NavLink>
      <nav className="flex gap-4 text-lg items-center">
        <div className="table-cell relative p-15">
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive
                ? "transition-all active-link text-textPrimary"
                : "transition-all hover:text-textPrimary hover-underline"
            }
          >
            destinations
          </NavLink>
        </div>
        <div className="table-cell relative p-15">
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive
                ? "transition-all active-link text-textPrimary"
                : "transition-all hover:text-textPrimary hover-underline"
            }
          >
            store
          </NavLink>
        </div>
        <div className="table-cell relative p-15">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "transition-all active-link text-textPrimary"
                : "transition-all hover:text-textPrimary hover-underline"
            }
          >
            login
          </NavLink>
        </div>
        <div className="table-cell relative p-15">
          <NavLink
            to="/register"
            className="transition-all hover:text-textPrimary hover-underline"
          >
            register
          </NavLink>
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
