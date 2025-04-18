import axios from "axios";
import { cookies } from "next/headers";

const satellite = axios.create({
  baseURL: "http://192.168.1.5:4000",
  timeout: 20_000,
});

satellite.interceptors.request.use(
  async (request) => {
    const cookie = await cookies();
    const token = cookie.get("token");

    if (token) request.headers["Authorization"] = `Bearer ${token.value}`;

    return request;
  },
  async (error) => Promise.reject(error),
);

satellite.interceptors.response.use(
  async (response) => response,
  async (error) => {
    if (error.response) {
      const errorMessage =
        error.response.data.message || "An unknown error occurred";
      return Promise.reject({ status: false, message: errorMessage });
    }
    return Promise.reject({
      status: false,
      message: "Network error, please try again!",
    });
  },
);

export default satellite;
