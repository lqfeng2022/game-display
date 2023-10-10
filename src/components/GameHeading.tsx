import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  //1.4)get the genre name from hook
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  //2.3)get the platform name from hook
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  //1.4_a)'gameQuery.genre?' -> 'genre?'
  //2.3_a)'gameQuery.platformId?' -> 'platform?'
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games `;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
