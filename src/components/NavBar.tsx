import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import ColorModeToggle from "./ColorModeToggle";

const NavBar = () => {
  return (
    <HStack padding="10px" margin={2}>
      <Link to="/">
        <Text as="i" whiteSpace="nowrap" fontSize="lg">
          GAME HUB
        </Text>
      </Link>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
