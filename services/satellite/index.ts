import { getToken } from "@/utils/cookies/cookies.data";
import axios from "axios";

const satellite = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_DEV,
  timeout: 20_000,
  withCredentials: true,
});

satellite.interceptors.request.use(
  async (request) => {
    const token = await getToken();

    if (token) request.headers["Authorization"] = `Bearer ${token}`;

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
