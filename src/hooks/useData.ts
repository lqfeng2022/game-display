import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// 3.5)when use DATA hook, we should pass genres as query parameter,
// 3.5_a)AxiosRequestConfig: obj, with it we can pass data in the request body
// 3.6_a)deps: pass dependences as the 3rd parameter
// note: once declare an optional parameter, all following parameters have to be optional as well
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      // 3.5_b)...requestConfig: to add any additional properties here
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  // 3.6)ISSUE: [] -- fetch data only once the first time component is rendered
  //  ->when selectedGenre changes, we send another request to get games that match the genre
  //  SOLUTION: [...deps] -- pass an array of dependences here
  //  3.6_b)ISSUE: [...deps]
  //  ->deps is optional, it could be undefined, we cannot spread undefined obj
  //  SOLUTION: deps ? [...deps] : []
  //  --now DATA hook receives dependences, we should specify them when calling DATA hook
  return { data, error, isLoading };
};

export default useData;
