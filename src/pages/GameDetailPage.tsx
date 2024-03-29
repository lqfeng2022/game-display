import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshorts from "../components/GameScreenshorts";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box p="10px">
      <Heading paddingBottom={5}>{game.name}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        <GridItem>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
          <GameTrailer gameId={game.id} />
        </GridItem>
        <GridItem>
          <GameScreenshorts gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
