import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

//3)fetch the game with the given slug
const GameDetailPage = () => {
  //3.1)read the 'slug' from url paras
  const { slug } = useParams();
  //4)call useGame hook and pass 'slug'
  //4.1)'slug!': is a TS trick, tell TS compiler this constant is never be null
  // cus this 'slug' can be undefined, we cannot pass it to this hook
  const { data: game, isLoading, error } = useGame(slug!);

  //5)do the usual stuff
  if (isLoading) return <Spinner />;
  //6.1_b)'error' ->..
  if (error || !game) throw error;

  //6)otherwise, if there's no error, we return some details..
  return (
    <>
      {/* 6.1_a)with it('6.1_b)'), 
              we don't need using 'game?' millions time in markup */}
      <Heading>{game.name}</Heading>
      {/* 6.2_a)here there's no this property, go to 'Game' interface to add this prop */}
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
