import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  // 1)add this property to Genre interface
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;

// shortcut: command + . ->selete 'Delete all unused imports'
