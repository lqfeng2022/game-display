import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

//add 'default'
export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  website: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // design smell
  metacritic: number;
  rating_top: number;
}
