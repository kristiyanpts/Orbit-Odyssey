import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import AuthContext from "../../core/contexts/authContext";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, isAdmin, userId } = useContext(AuthContext);

  if (
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("admin")
  )
    return;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-24 w-full bg-header text-textSecondary flex flex-row justify-between items-center px-8 box-border">
      <NavLink to="/">
        <img src={logo} alt="Company Logo" className="h-20 w-20" />
      </NavLink>

      <button
        className="md:hidden block z-20" // Ensure this is above the dropdown
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-header md:static md:w-auto md:bg-transparent flex-col md:flex-row gap-5 text-lg items-center z-50 transition-all ease-out duration-300 md:flex`}
      >
        <nav
          className="flex flex-col md:flex-row gap-5 text-lg items-center w-full md:w-auto"
          id="navbar"
        >
          <div className="table-cell relative p-15">
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive
                  ? "transition-all active-link text-textPrimary font-bold"
                  : "transition-all hover:text-textPrimary hover-underline font-bold"
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
                  ? "transition-all active-link text-textPrimary font-bold"
                  : "transition-all hover:text-textPrimary hover-underline font-bold"
              }
            >
              store
            </NavLink>
          </div>

          {!isAuthenticated && (
            <>
              <div className="table-cell relative p-15">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-all active-link text-textPrimary font-bold"
                      : "transition-all hover:text-textPrimary hover-underline font-bold"
                  }
                >
                  login
                </NavLink>
              </div>
              <div className="table-cell relative p-15">
                <NavLink
                  to="/register"
                  className="transition-all hover:text-textPrimary hover-underline font-bold"
                >
                  register
                </NavLink>
              </div>
            </>
          )}

          {isAuthenticated && (
            <>
              <div className="table-cell relative p-15">
                <NavLink
                  to={`/user/${userId}`}
                  className={({ isActive }) =>
                    isActive
                      ? "transition-all active-link text-textPrimary font-bold"
                      : "transition-all hover:text-textPrimary hover-underline font-bold"
                  }
                >
                  profile
                </NavLink>
              </div>

              {isAdmin && (
                <div className="table-cell relative p-15">
                  <NavLink
                    to={`/admin`}
                    className={({ isActive }) =>
                      isActive
                        ? "transition-all active-link text-textPrimary font-bold"
                        : "transition-all hover:text-textPrimary hover-underline font-bold"
                    }
                  >
                    admin
                  </NavLink>
                </div>
              )}
              <div className="table-cell relative p-15">
                <NavLink
                  to="/logout"
                  className="transition-all hover:text-textPrimary hover-underline font-bold"
                >
                  logout
                </NavLink>
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
