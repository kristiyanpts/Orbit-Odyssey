import { API_BASEURL } from "../constants/api.constants";
import * as request from "../lib/request";

export const login = async (email, password) => {
  const result = await request.post(`${API_BASEURL}/login`, {
    email,
    password,
  });

  return result;
};

export const register = (
  email,
  password,
  repeatPassword,
  firstName,
  lastName,
  phone,
  address
) =>
  request.post(`${API_BASEURL}/register`, {
    email,
    password,
    repeatPassword,
    firstName,
    lastName,
    phone,
    address,
  });

export const logout = () => request.post(`${API_BASEURL}/logout`);

export const loadBackend = () => request.get(`${API_BASEURL}/info`);
