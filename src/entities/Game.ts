import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  //add 'gneres' here
  genres: Genre[];
  //add 'publishers' here
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // design smell
  metacritic: number;
  rating_top: number;
}