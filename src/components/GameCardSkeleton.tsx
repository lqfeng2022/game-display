// TO render a skeleton, we should create a separate component
//  which is gonna look like a GameCard but is not a GameCard, cus we can only render a GameCard if we have a Game obj
//  in this case, we don't have a game, so we render a skeleton..
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;

// Skeletion: like a placeholder from image is been loaded..
// height='200px': just arbitrary, we have to play different value to see what works
