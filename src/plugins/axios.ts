import axios, { AxiosError } from "axios";
// import { useAuthStore } from "@/store";

import { ROUTES } from "@/helpers";

export const ENV_VARS = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000",
};

const instance = axios.create({
  baseURL: `${ENV_VARS.API_BASE_URL}/api/v1`,
});

const CANCELLED_STATUS_CODE = 499;
function errorHandler(error: AxiosError) {
  let { status } = error.response || {};
  status = error.code === "ERR_CANCELED" ? CANCELLED_STATUS_CODE : status;

  if (status === 401 && !window.location.pathname.includes("auth")) {
    window.location.pathname = ROUTES.auth.login;
  }

  throw {
    status,
    ...(error?.response?.data || {
      message: error.message || "Sorry, an unexpected error occurred.",
    }),
  };
}

instance.interceptors.request.use((request: any) => {
  const headers = request.headers;
  const token = localStorage.getItem("token");

  return {
    ...request,
    headers: {
      ...headers,
      Authorization: `JWT ${token ? token : ""}`,
    },
  };
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data?.token) localStorage.setItem("token", data.token);
    return data;
  },
  (error) => errorHandler(error)
);

export { instance as httpClient };
