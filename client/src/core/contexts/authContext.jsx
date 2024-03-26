import usePersistedState from "../hooks/usePersistedState";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import { EMAIL_REGEX_VALIDATOR } from "../constants/api.constants";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../notifications/notifications";
import { parseError } from "../../core/lib/errorParser";

// @ts-ignore
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    // Validating values
    if (!EMAIL_REGEX_VALIDATOR.test(values.email)) {
      return SendErrorNotification(`Invalid email format!`);
    }

    if (values.password.length < 8) {
      return SendErrorNotification(
        `Password must be at least 8 characters long!`
      );
    }

    // Back-End request
    try {
      const result = await authService.login(
        values.email,
        values.password,
        values.rememberMe
      );

      setAuth(result);

      SendSuccessNotification(
        `Welcome back, ${result.firstName} ${result.lastName}!`
      );

      localStorage.setItem("id", result._id);

      navigate("/");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  };

  const registerSubmitHandler = async (values) => {
    // Validating values
    if (values.firstName.length < 1 || values.lastName.length < 1) {
      return SendErrorNotification(
        `First and last name must be at least 1 characters long!`
      );
    }

    if (!EMAIL_REGEX_VALIDATOR.test(values.email)) {
      return SendErrorNotification(`Invalid email format!`);
    }

    if (values.password.length < 8 || values.repeatPassword.length < 8) {
      return SendErrorNotification(
        `Passwords must be at least 8 characters long!`
      );
    }

    // Back-End Request
    try {
      const result = await authService.register(
        values.email,
        values.password,
        values.repeatPassword,
        values.firstName,
        values.lastName,
        values.phone,
        values.address
      );

      setAuth(result);

      SendSuccessNotification(
        `Successful registration! Welcome, ${result.firstName} ${result.lastName}!`
      );

      localStorage.setItem("id", result._id);

      navigate("/");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("id");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    firstName: auth.firstName,
    lastName: auth.lastName,
    email: auth.email,
    password: auth.password,
    repeatPassword: auth.repeatPassword,
    address: auth.address,
    phone: auth.phone,
    role: auth.role,
    userId: auth._id,
    isAuthenticated: !!auth._id,
    isAdmin: auth.role == "admin" || auth.role == "owner",
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
