import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import { useContext } from "react";
import AuthContext from "../../core/contexts/authContext";
import { useForm } from "../../core/hooks/useForm";

const LoginFormKyes = {
  Email: "email",
  Password: "password",
  RememberMe: "rememberMe",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKyes.Email]: "",
    [LoginFormKyes.Password]: "",
    [LoginFormKyes.RememberMe]: "",
  });

  return (
    <div className="absolute h-screen w-screen bg-transparent flex items-center justify-center">
      <div className="relative bg-white rounded-lg flex transition-all shadow-lg w-fit h-fit items-center">
        <div className="relative p-7 w-96 h-full flex flex-col gap-2 items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-60" />
          </Link>
          <div className="text-3xl font-bold">Orbit Odyssey</div>
          <div>
            The future is here and you can experience it now! Book your trip
            today!
          </div>
          <div className="relative w-full">
            Don&apos;t have an account, yet?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline transition-all"
            >
              Register
            </Link>
          </div>
        </div>
        <form
          className="relative p-7 w-96 h-auto flex flex-col gap-2"
          onSubmit={onSubmit}
        >
          <h1 className="text-3xl">Login</h1>
          <span>
            Login to be able to book your next trip, manage all of your current
            trips and of course enjoy everything we&apos;ve done for you even
            better.
          </span>
          <div className="relative z-0 w-full mt-3 group">
            <input
              type="email"
              id={LoginFormKyes.Email}
              name={LoginFormKyes.Email}
              onChange={onChange}
              value={values[LoginFormKyes.Email]}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={LoginFormKyes.Email}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mt-3 mb-3 group">
            <input
              type="password"
              id={LoginFormKyes.Password}
              name={LoginFormKyes.Password}
              onChange={onChange}
              value={values[LoginFormKyes.Password]}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={LoginFormKyes.Password}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id={LoginFormKyes.RememberMe}
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                name={LoginFormKyes.RememberMe}
                onChange={onChange}
                value={values[LoginFormKyes.RememberMe]}
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ms-2 text-sm">
              <label
                htmlFor={LoginFormKyes.RememberMe}
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
              <p
                id="helper-checkbox-text"
                className="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                You will be signed in for the next 7 days. After 7 days you will
                be prompted to login again.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-60 px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
