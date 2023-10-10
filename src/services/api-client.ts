import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  //1.4_d)add next property here
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3cce104e441d44a99ba25b0d85b2ac1a",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data); //extract data from response
  };
}

export default APIClient;
