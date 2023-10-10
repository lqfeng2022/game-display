import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // design smell
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  //1.1)useQuery -> useInfiniteQuery
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    //1.2)add parameter here, use destructure with pageParam property
    // and initialize it as 1, so we get data for the first page properly..
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          //1.3)pass page parameter to backend and set it to pageParam
          page: pageParam,
        },
      }),
    //1.4)implement getNextPageParam(), react call this f to calculat the next page number
    //1.4_a)with 2 parameters: lastPage and allPages
    getNextPageParam: (lastPage, allPages) => {
      //1.4_b)allPages contains the data for each page react retrieved
      // so to compute the next page number -> allPages.length + 1
      //1.4_c)somepoint we're gonna hit the end of lists,
      // so we should return undefined to tell react-query that there'are no more pages..
      // ->reference picture(games/Get a list of games./responses/..)
      // if the next if null that means no more pages..
      //1.4_e)check lastPage.next ? ..
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // NOTE: forget 'staleTime'
    staleTime: 24 * 60 * 60 * 1000 //24h
  });

export default useGames;
