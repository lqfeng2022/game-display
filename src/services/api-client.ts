import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

//1)declare it as local constant in this module
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3cce104e441d44a99ba25b0d85b2ac1a",
  },
});

//2)creat a class called APIClient
class APIClient<T> {
  //2.1)give it an endpoint property
  endpoint: string;

  //2.2)initialize it with constructor
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  //2.3)in this class we only need a single method for now
  //2.3_a)config: add it as a optional parameter here, we only need it in Games hook
  //2.3_b)use arrow f here, so we don't have problem with 'this.endpoint'
  getAll = (config: AxiosRequestConfig) => {
    //NOTE: this is the only place where we have this logic
    // we don't have to duplicate it every time we fetch data from backend
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data); //extract data from response
  };
}

export default APIClient;
