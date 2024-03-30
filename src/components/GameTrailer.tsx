import { Box, Heading } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  // console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return (
    <Box marginY={5}>
      <Heading fontSize="2xl" color="gray.500" marginBottom={3}>
        Trailer
      </Heading>
      {first ? (
        //'poster': add preview image
        //'controls': for user play/pose video
        <video src={first.data[480]} poster={first.preview} controls />
      ) : (
        "There's no trailer here"
      )}
    </Box>
  );
};

export default GameTrailer;
