import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  //2.1)compute it before returning a markup
  // use reduce() to combine the number of games in each page into a number
  //2.1_a)with 2 parameters, the first one is a variable contains the total
  // the 2nd one is an element in this array(data?.pages),
  // an array of pages, each element is a page obj..
  //2.1_b)in each iteration, we have to count the number of games in the page,
  //  then added it to the 'total'..
  //2.1_c)'0': the 2nd argm of reduce(), the initial value of 'total'
  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  //2.1_d)fetchGamesCount is undefined, cus inital the data is undefined,
  // so here we should give it a default value: ' || 0'

  return (
    // 1)grab <SimpleGrid> inside <InfiniteScroll>
    // 2)set dataLength prop which is the total number of items we have fetched so far
    // 3)set another prop called hasMore
    // 3.1)!!hasNextPage: cus hasNextPage is boolean or undefined,
    //   so use '!!' convert it to an actual boolean value,
    //   and what if is undefined, '!!' will convert it to an boolean false
    // 4)add the 3rd prop 'next', this is exactly like how we handle event click of 'Load More' button
    // 5)add the last prop 'loader', this is what we show the user while fetching the next page
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
    //NOTE: no longer need 'Load More' button -> no need for <Box>
  );
};

export default GameGrid;
