import useScreenshots from "../hooks/useScreenshorts";
import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshorts = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;
  return (
    <Box>
      <Heading fontSize="2xl" color="gray.500" marginBottom={3}>
        Screenshots
      </Heading>
      <SimpleGrid spacing={3}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshorts;
