import { GameQuery } from "../App";
import useData from "./useData";

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
}

//3)pass it('searchText') to backend
// every thing in this obj(GameQuery), this is beauty of query obj
// instead passing so many variables around, simplely pass only one that includes anything we need
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        //3.1)
        search: gameQuery.searchText,
      },
    },
    [gameQuery] //anytime this obj changes, we need refetch the data
  );

export default useGames;
