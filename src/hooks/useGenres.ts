import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
//2.1)apiClient obj -> APIClient class
import APIClient, { FetchResponse } from "../services/api-client";

//2.2)create an instance of APIClient here for working with genres
const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    //2.3) replace query f to apiClient.getAll
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
