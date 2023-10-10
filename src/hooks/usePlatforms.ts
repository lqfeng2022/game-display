import platforms from "../data/platforms";
//3.1)apiClient obj -> APIClient class
import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

//3.2)create an instance of APIClient here for working with platforms
const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    //3.3)replace query f to apiClient.getAll
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
