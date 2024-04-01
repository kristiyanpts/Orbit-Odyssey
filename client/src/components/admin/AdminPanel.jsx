import { useContext, useState } from "react";
import AuthContext from "../../core/contexts/authContext";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

const AdminPanel = () => {
  const { isAuthenticated, isAdmin, firstName, lastName } =
    useContext(AuthContext);

  const [isMenuShown, setIsMenuShown] = useState(false);

  if (!isAuthenticated || !isAdmin) return;

  return (
    <div className="relative w-screen h-screen box-border bg-textPrimary flex">
      <div
        className={`relative min-w-[256px] h-full bg-header text-white transition-all ${
          isMenuShown ? "ml-0" : "ml-[-256px]"
        }`}
      >
        <div className="relative w-full h-[100px] bg-primary flex p-2 box-border gap-2 items-center">
          <img
            src="https://www.computerhope.com/jargon/g/guest-user.png"
            alt=""
            className="relative w-16 border-2 border-green-400 rounded-[50%]"
          />
          <div className="relative w-full">
            <div className="text-lg">
              {firstName} {lastName}
            </div>
            <div className="text-green-400 text-sm">
              <i className="fa-solid fa-circle"></i> Online
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-col">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "relative w-full h-[50px] flex items-center px-2 box-border transition-all bg-primary gap-2"
                : "relative w-full h-[50px] flex items-center px-2 box-border transition-all hover:bg-primary gap-2"
            }
          >
            <i className="fa-solid fa-gauge w-[30px] text-xl text-red-400 flex justify-center items-center"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/admin/trips"
            className={({ isActive }) =>
              isActive
                ? "relative w-full h-[50px] flex items-center px-2 box-border transition-all bg-primary gap-2"
                : "relative w-full h-[50px] flex items-center px-2 box-border transition-all hover:bg-primary gap-2"
            }
          >
            <i className="fa-solid fa-globe w-[30px] text-xl text-green-400 flex justify-center items-center"></i>
            <span>Trips</span>
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? "relative w-full h-[50px] flex items-center px-2 box-border transition-all bg-primary gap-2"
                : "relative w-full h-[50px] flex items-center px-2 box-border transition-all hover:bg-primary gap-2"
            }
          >
            <i className="fa-solid fa-shirt w-[30px] text-xl text-purple-400 flex justify-center items-center"></i>
            <span>Products</span>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "relative w-full h-[50px] flex items-center px-2 box-border transition-all bg-primary gap-2"
                : "relative w-full h-[50px] flex items-center px-2 box-border transition-all hover:bg-primary gap-2"
            }
          >
            <i className="fa-solid fa-users w-[30px] text-xl text-blue-400 flex justify-center items-center"></i>
            <span>Users</span>
          </NavLink>
        </div>
      </div>
      <div className="relative w-full h-full  flex flex-col">
        <div className="relative w-full h-[60px] bg-header flex justify-between">
          <div className="relative flex">
            <button
              className="relative w-[60px] h-full text-white flex items-center justify-center transition-all bg-orange-500 hover:bg-orange-800"
              onClick={() => setIsMenuShown(!isMenuShown)}
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
            <Link to="/" className="relative flex items-center text-white">
              <img src={logo} alt="" className="relative h-full" />
            </Link>
          </div>
          <div className="relative flex"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
