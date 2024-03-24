import Game from "../entities/Game";
import {
  Card,
  Image,
  CardBody,
  Heading,
  HStack,
  useColorMode,
  AspectRatio,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card>
      <Link to={"/games/" + game.slug}>
        <AspectRatio ratio={4 / 3}>
          <Image src={game.background_image || noImage} />
        </AspectRatio>
        <CardBody bg={colorMode == "light" ? "gray.50" : ""}>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
