import axios from "axios";

//4)move this interface to api-client module
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3cce104e441d44a99ba25b0d85b2ac1a",
  },
});

// with this config, this key will be included in the query string of every HTTP request we sent to the backend
