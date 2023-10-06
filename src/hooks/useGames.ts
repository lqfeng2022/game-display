import useData from "./useData";
import { Genre } from "./useGenres";

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

// 3.4)In GAMES hook, pass this selectedGenre as a query string parameter to the DATA hook
// ->make it more flexible by giving it an AxiosRequestConfig obj
// 3.4.a){ params: { genres: selectedGenre?.id } }: 
//  when using DATA hook, we should pass 'genres' as query parameter
//  params: prperty of AxiosRequestConfig
// 3.6.c)[selectedGenre?.id]: we should specify them when(dependencies) calling DATA hook
// const useGames = () =>useData<Game>("/games");
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
