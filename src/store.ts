import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  //2.1)SOLUTION: make these properties are optional too
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  //1)WHY we don't have a single f like 'setGameQuery'??
  //  cus the logic for updating the searchText is different from other properties
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  //2)ISSEU: Type '{}' is missing the following properties from type 'GameQuery': platformId, sortOrder, searchTextts(2739)
  gameQuery: {},
  //3)when search a game, we only need to set the searchText and clear other filters,
  //  cus when user search a game, we need clear other filters like genre/platform,
  //  otherwise, the user my selecte the wrong genre/platfrom..
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
