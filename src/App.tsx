import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// undefined: the absence of a value
// null: the intentional absence of a value

export interface GameQuery {
  //1)'genre: Genre | null' -> 'genreId?: number'
  genreId?: number;
  //2)'platform: Platform | null' -> 'platformId: number'
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            //1.1)update 'genre' -> 'genreId' adn 'genre' -> 'genreId: genre'
            //1.2)compilation error, go to GenreList to fix it
            //1.2_d)'selectedGenre' -> 'selectedGenreId'
            selectedGenreId={gameQuery.genreId}
            //1.3)'genre' -> 'genre.id'
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2.5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              //2.1)go to this PlatformSelector component
              selectedPlatformId={gameQuery.platformId}
              //2.2)'platform' -> 'platform.id'
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
