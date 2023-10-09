import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    //2.1)we should not specific this <Genre[]>,
    // instead we should get an obj that has those properties
    //2.3)Genre[] -> FetchResponse<Genre>, here we don't need add [],
    // cus it's gonna convert to an array of results property(results: T[])
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    //3)improve implementaion
    //3.1)cus list of genres hardly ever changes
    staleTime: 24 * 60 * 60 * 1000, //24h
    //3.2)provide initial data, so we don't have to go to backend show the user a spinner
    // can set it to the static data(genre)
    //3.2_a)ISSUE: in this file, we don't have those properties
    // (count/next/previous/results), 2 solutions
    // initialData: genres,
    //3.2_b)way1: genres -> { count: genres.length, results: genres }
    initialData: { count: genres.length, results: genres },
    //3.2_c)way2: update genres.ts file, change to what exact we get from backend, need extra work
  });

export default useGenres;
