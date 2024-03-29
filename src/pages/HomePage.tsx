import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import GenreList2 from "../components/GenreList2";
import PlatformSelector from "../components/PlatformSelector";
import SearchInput from "../components/SearchInput";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const [hide, setHide] = useState(false);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        xl: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        xl: "200px 1fr",
      }}
    >
      <Show above="xl">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box px={2.5}>
          <Show below="sm">
            <Box>
              <SearchInput />
            </Box>
          </Show>
          <GameHeading />
          <Box py={2}>
            <Show below="xl">
              <Button
                py={2}
                colorScheme="gray"
                fontSize="lg"
                onClick={() => setHide(!hide)}
              >
                {hide ? "Hide" : "Show"} Genres:
              </Button>
              {hide && <GenreList2 />}
            </Show>
          </Box>
          <HStack spacing={5} my={2}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
