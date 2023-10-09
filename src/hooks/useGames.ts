import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
//4.1)import FetchResponse from api-client
import apiClient, { FetchResponse } from "../services/api-client";

//NOTE: fix this duplication(with usePlatforms.ts) in another commit
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // design smell
  metacritic: number;
  rating_top: number;
}

//1)->useQuery({ .. })
const useGames = (gameQuery: GameQuery) =>
  //b)1)solution: provide a generic type argms
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            //c)BUG: when select 'playstation', there's no results..
            //c_)fix it: platforms -> parent_platforms
            // cus earlier, we populated platforms dropdown list using 'parent_platfroms',
            // so the right way to filter game by platforms is by setting this parameter, not 'platforms'
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
