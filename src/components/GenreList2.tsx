import { Button, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const genres = [
    { id: 4, name: "Action" },
    { id: 10, name: "Strategy" },
    { id: 5, name: "RPG" },
    { id: 2, name: "Shooter" },
    { id: 3, name: "Adventure" },
    { id: 7, name: "Puzzle" },
    { id: 1, name: "Racing" },
    { id: 15, name: "Sports" },
    { id: 40, name: "Casual" },
  ];

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Wrap spacing={3} py={3}>
      {genres.map((genre) => (
        <WrapItem key={genre.id}>
          <Button
            px={2}
            colorScheme="teal"
            fontSize="lg"
            variant="outline"
            fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default GenreList;
