import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    //ISSUE: queryKey
    //REASON: earlier we modify FetchResponse interface, 
    // introduce a new property - next, but we don't have it initialData
    //SOLUTION: 
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    //1)add 'next: null' inside this obj
    // problem: what if one day we add another porperty in the interface, 
    // we gotta back here add it here again..
    //2)a better approach is modify static data - genres
    initialData: genres,
  });

export default useGenres;
