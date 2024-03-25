import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.includes("login") || pathname.includes("register")) return;

  return (
    <div className="relative bg-header p-10 flex flex-col text-white gap-5 mt-auto w-full">
      <div className="flex justify-between">
        <img src={logo} alt="" className="w-28 h-28" />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Orbit Odyssey</span>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <a href="" className="hover:underline">
            TOS
          </a>
          <a href="" className="hover:underline">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Orbit Odyssey</span>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            TOS
          </a>
          <a href="" className="hover:underline">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Orbit Odyssey</span>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            TOS
          </a>
          <a href="" className="hover:underline">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Orbit Odyssey</span>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            TOS
          </a>
          <a href="" className="hover:underline">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Orbit Odyssey</span>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            TOS
          </a>
          <a href="" className="hover:underline">
            FAQs
          </a>
        </div>
      </div>

      <div className="relative w-full h-1 bg-white left-1/2 -translate-x-1/2 rounded text-transparent">
        placeholder
      </div>

      <div className="relative w-full h-fit flex justify-between items-center">
        <span>&copy;2024 Orbit Odyssey. All rights reserved.</span>
        <div className="flex gap-2">
          <a
            href=""
            className="relative w-10 h-10 rounded-full bg-white flex text-header justify-center items-center cursor-pointer hover:bg-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            className="relative w-10 h-10 rounded-full bg-white flex text-header justify-center items-center cursor-pointer hover:bg-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            className="relative w-10 h-10 rounded-full bg-white flex text-header justify-center items-center cursor-pointer hover:bg-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            className="relative w-10 h-10 rounded-full bg-white flex text-header justify-center items-center cursor-pointer hover:bg-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            className="relative w-10 h-10 rounded-full bg-white flex text-header justify-center items-center cursor-pointer hover:bg-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
