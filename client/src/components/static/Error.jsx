import { Link } from "react-router-dom";
import gif from "../../assets/404.gif";

const Error = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center flex-col p-10 gap-4">
      <img src={gif} alt="" className="w-96" />
      <h1 className="font-bold text-3xl text-center">
        You&apos;ve reached the end of our galaxy! <br /> Return home now!
      </h1>
      <Link
        to="/"
        className="relative w-fit px-5 box-border h-10 flex items-center justify-center transition-all font-bold border-2 border-header bg-header text-white rounded hover:text-header hover:bg-white"
      >
        RETURN HOME
      </Link>
    </div>
  );
};

export default Error;
