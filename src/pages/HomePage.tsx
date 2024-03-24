import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GenreList2 from "../components/GenreList2";

const HomePage = () => {
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
        <Box paddingLeft={2.5}>
          <GameHeading />
          <Show below="xl">
            <GenreList2 />
          </Show>
          <HStack spacing={5} marginBottom={5}>
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
