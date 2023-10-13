import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

//3.3_b)create a new 'apiClient'
const apiClient = new APIClient<Game>("games");

//3.2)use hook for fetching data from backend
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    //3.3)here we have to use api-client
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
