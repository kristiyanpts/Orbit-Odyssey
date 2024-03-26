import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import { useContext, useState } from "react";
import AuthContext from "../../core/contexts/authContext";
import { useForm } from "../../core/hooks/useForm";

const SignUpFormKyes = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  RepeatPassword: "repeatPassword",
  Address: "address",
  Phone: "phone",
};

const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [SignUpFormKyes.FirstName]: "",
    [SignUpFormKyes.LastName]: "",
    [SignUpFormKyes.Email]: "",
    [SignUpFormKyes.Password]: "",
    [SignUpFormKyes.RepeatPassword]: "",
    [SignUpFormKyes.Phone]: "",
    [SignUpFormKyes.Address]: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline transition-all"
            >
              Login
            </Link>
          </div>
        </div>
        <form
          className="relative p-7 w-fit h-auto bg-white rounded-lg flex flex-col gap-2 transition-all"
          onSubmit={onSubmit}
        >
          <h1 className="text-3xl">Register</h1>
          <span>
            Register to gain access to features such as booking your next trip,
            access to merchandise and many more.
          </span>
          <div className="relative z-0 w-full mt-5 group">
            <input
              type="email"
              name={SignUpFormKyes.Email}
              onChange={onChange}
              value={values[SignUpFormKyes.Email]}
              id={SignUpFormKyes.Email}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={SignUpFormKyes.Email}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mt-5 group">
            <input
              type={showPassword ? "text" : "password"}
              name={SignUpFormKyes.Password}
              onChange={onChange}
              value={values[SignUpFormKyes.Password]}
              id={SignUpFormKyes.Password}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={SignUpFormKyes.Password}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <i
              className={`fa-solid fa-eye${
                showPassword ? "-slash" : ""
              } icon toggle-password absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-900`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <div className="relative z-0 w-full mt-5 group">
            <input
              type={showRepeatPassword ? "text" : "password"}
              name={SignUpFormKyes.RepeatPassword}
              onChange={onChange}
              value={values[SignUpFormKyes.RepeatPassword]}
              id={SignUpFormKyes.RepeatPassword}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={SignUpFormKyes.RepeatPassword}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            <i
              className={`fa-solid fa-eye${
                showRepeatPassword ? "-slash" : ""
              } icon toggle-password absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-900`}
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            ></i>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mt-5 group">
              <input
                type="text"
                name={SignUpFormKyes.FirstName}
                onChange={onChange}
                value={values[SignUpFormKyes.FirstName]}
                id={SignUpFormKyes.FirstName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={SignUpFormKyes.FirstName}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mt-5 group">
              <input
                type="text"
                name={SignUpFormKyes.LastName}
                onChange={onChange}
                value={values[SignUpFormKyes.LastName]}
                id={SignUpFormKyes.LastName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={SignUpFormKyes.LastName}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mt-5 group">
              <input
                type="tel"
                pattern="+[0-9]{3}-[0-9]{4}-[0-9]{5}"
                name={SignUpFormKyes.Phone}
                onChange={onChange}
                value={values[SignUpFormKyes.Phone]}
                id={SignUpFormKyes.Phone}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={SignUpFormKyes.Phone}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mt-5 mb-5 group">
              <input
                type="text"
                name={SignUpFormKyes.Address}
                onChange={onChange}
                value={values[SignUpFormKyes.Address]}
                id={SignUpFormKyes.Address}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={SignUpFormKyes.Address}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Home Address/Mailing Address
              </label>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                required
                value=""
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ms-2 text-sm">
              <label
                htmlFor="helper-checkbox"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                I accept the{" "}
                <a href="" className="text-blue-500">
                  terms of service
                </a>
                .
              </label>
              <p
                id="helper-checkbox-text"
                className="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                Please, read through them carefully before registering.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-60 px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    // <div className="relative h-full w-full bg-transparent flex items-center justify-center my-12">
    //   <form className="relative p-7 lg:w-2/5 md:w-3/5 w-4/5 h-auto bg-white rounded-lg flex flex-col gap-2 transition-all shadow-lg">
    //     <h1 className="text-3xl">Register</h1>
    //     <span>
    //       Register to gain access to features such as booking your next trip,
    //       access to merchandise and many more.
    //     </span>
    //     <div className="relative z-0 w-full mt-5 group">
    //       <input
    //         type="email"
    //         name="floating_email"
    //         id="floating_email"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         htmlFor="floating_email"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Email address
    //       </label>
    //     </div>
    //     <div className="relative z-0 w-full mt-5 group">
    //       <input
    //         type="password"
    //         name="floating_password"
    //         id="floating_password"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         htmlFor="floating_password"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Password
    //       </label>
    //     </div>
    //     <div className="relative z-0 w-full mt-5 group">
    //       <input
    //         type="password"
    //         name="repeat_password"
    //         id="floating_repeat_password"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         htmlFor="floating_repeat_password"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Confirm password
    //       </label>
    //     </div>
    //     <div className="grid md:grid-cols-2 md:gap-6">
    //       <div className="relative z-0 w-full mt-5 group">
    //         <input
    //           type="text"
    //           name="floating_first_name"
    //           id="floating_first_name"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_first_name"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           First name
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mt-5 group">
    //         <input
    //           type="text"
    //           name="floating_last_name"
    //           id="floating_last_name"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_last_name"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Last name
    //         </label>
    //       </div>
    //     </div>
    //     <div className="grid md:grid-cols-2 md:gap-6">
    //       <div className="relative z-0 w-full mt-5 group">
    //         <input
    //           type="tel"
    //           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //           name="floating_phone"
    //           id="floating_phone"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_phone"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Phone number (123-456-7890)
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mt-5 mb-5 group">
    //         <input
    //           type="text"
    //           name="floating_address"
    //           id="floating_address"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_address"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Home Address/Mailing Address
    //         </label>
    //       </div>
    //     </div>
    //     <div className="flex">
    //       <div className="flex items-center h-5">
    //         <input
    //           id="helper-checkbox"
    //           aria-describedby="helper-checkbox-text"
    //           type="checkbox"
    //           required
    //           value=""
    //           className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //         />
    //       </div>
    //       <div className="ms-2 text-sm">
    //         <label
    //           htmlFor="helper-checkbox"
    //           className="font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           I accept the{" "}
    //           <a href="" className="text-blue-500">
    //             terms of service
    //           </a>
    //           .
    //         </label>
    //         <p
    //           id="helper-checkbox-text"
    //           className="text-xs font-normal text-gray-500 dark:text-gray-300"
    //         >
    //           Please, read through them carefully before registering.
    //         </p>
    //       </div>
    //     </div>
    //     <button
    //       type="submit"
    //       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-60 px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Register
    //     </button>
    //   </form>
    // </div>
  );
};

export default Register;
