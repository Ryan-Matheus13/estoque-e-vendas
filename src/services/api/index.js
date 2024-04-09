import axios, { AxiosRequestHeaders } from "axios";

interface IHeaderConfig extends AxiosRequestHeaders {
  Authorization: string;
  Accept: string;
  AccessControlAllowOrigin: string;
  AccessControlAllowMethods: string;
  AccessControlAllowHeaders: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    return error.response;
  }
);

api.interceptors.request.use(async config => {
  // const access = await StorageUtils.getDataJwtToken();
  config.headers = {
      // Authorization: `Bearer ${access?.access}`,
      Accept: 'application/json',
      AccessControlAllowOrigin: '*',
      AccessControlAllowMethods: 'DELETE, POST, GET',
      AccessControlMaxAge: 86400,
      AccessControlAllowHeaders: "accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with",
  } as unknown as IHeaderConfig

  return config;
});

export default api;
