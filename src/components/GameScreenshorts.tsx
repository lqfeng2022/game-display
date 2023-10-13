import useScreenshots from "../hooks/useScreenshorts";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshorts = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshorts;